import React, { useRef, useEffect, useState } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { Pose, POSE_CONNECTIONS } from '@mediapipe/pose';

function Monitor() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const soundRef = useRef(null);

    const [postureFeedback, setPostureFeedback] = useState('Click "Start" to begin');
    const [badPostureDuration, setBadPostureDuration] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isSoundPlaying, setIsSoundPlaying] = useState(false);
    const [cameraStarted, setCameraStarted] = useState(false);

    const badPostureStartRef = useRef(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const poseRef = useRef(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        const pose = new Pose({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
        });

        pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: false,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        pose.onResults(onResultsPose);
        poseRef.current = pose;

        soundRef.current = new Audio('./buzzer.wav');
        soundRef.current.loop = true;

        return () => {
            stopCamera();
            poseRef.current?.close();
            soundRef.current?.pause();
            soundRef.current.currentTime = 0;
        };
    }, []);

    const startCamera = () => {
        if (cameraStarted || !videoRef.current) return;

        const camera = new Camera(videoRef.current, {
            onFrame: async () => {
                if (videoRef.current.readyState === 4 && !isAnalyzing && poseRef.current) {
                    await poseRef.current.send({ image: videoRef.current });
                }
            },
            width: 640,
            height: 480,
        });

        camera.start().then(() => {
            cameraRef.current = camera;
            setCameraStarted(true);
            setIsAnalyzing(true);
            setPostureFeedback("Analyzing...");
        });
    };

    const stopCamera = () => {
        cameraRef.current?.stop();
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
        soundRef.current?.pause();
        soundRef.current.currentTime = 0;

        setIsAnalyzing(false);
        setCameraStarted(false);
        setBadPostureDuration(0);
        badPostureStartRef.current = null;
        setPostureFeedback("Monitoring stopped.");
    };

    const toggleCamera = () => {
        if (cameraStarted) {
            stopCamera();
        } else {
            startCamera();
        }
    };

    function calculateAngle2D(p1, p2, p3) {
        const v1 = [p1.x - p2.x, p1.y - p2.y];
        const v2 = [p3.x - p2.x, p3.y - p2.y];
        const dotProduct = v1[0] * v2[0] + v1[1] * v2[1];
        const mag1 = Math.hypot(...v1);
        const mag2 = Math.hypot(...v2);
        const angle = Math.acos(Math.min(Math.max(dotProduct / (mag1 * mag2), -1), 1));
        return angle * (180 / Math.PI);
    }

    function getMidpoint(p1, p2) {
        return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    }

    function onResultsPose(results) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        let isGoodPosture = true;
        const suggestions = [];

        if (results.poseLandmarks) {
            drawConnectors(ctx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#fff' });
            drawLandmarks(ctx, results.poseLandmarks, { color: '#0f0', radius: 4 });

            const ls = results.poseLandmarks[11];
            const rs = results.poseLandmarks[12];
            const le = results.poseLandmarks[7];
            const re = results.poseLandmarks[8];

            const midShoulder = getMidpoint(ls, rs);
            const midEar = getMidpoint(le, re);

            const vertical = { x: midShoulder.x, y: midShoulder.y - 0.1 };
            const headTilt = calculateAngle2D(vertical, midShoulder, midEar);
            const shoulderAlign = calculateAngle2D({ x: ls.x - 0.1, y: ls.y }, ls, rs);

            if (Math.abs(headTilt) > 15) {
                isGoodPosture = false;
                suggestions.push("Keep your head straight.");
            }

            if (shoulderAlign > 15) {
                isGoodPosture = false;
                suggestions.push("Align your shoulders.");
            }
        } else {
            isGoodPosture = false;
            suggestions.push("Pose not detected.");
        }

        if (!isGoodPosture && !isAnalyzing) {
            if (!badPostureStartRef.current) {
                badPostureStartRef.current = Date.now();
                intervalRef.current = setInterval(() => {
                    const seconds = Math.floor((Date.now() - badPostureStartRef.current) / 1000);
                    setBadPostureDuration(seconds);
                }, 1000);
            }

            const elapsed = Date.now() - badPostureStartRef.current;
            if (elapsed >= 15000 && !isSoundPlaying) {
                stopCamera()
                setIsSoundPlaying(true);
                setIsAnalyzing(false);
                soundRef.current?.play();
                setPostureFeedback("Alert! Sit properly.");
                timeoutRef.current = setTimeout(() => {
                    resetPostureTracking();
                }, 15000);
            } else {
                setPostureFeedback(`Bad posture (${badPostureDuration}s): ${suggestions.join(", ")}`);
            }
        }

        if (isGoodPosture) {
            if (badPostureStartRef.current) {
                clearInterval(intervalRef.current);
                badPostureStartRef.current = null;
                setBadPostureDuration(0);
            }

            if (!isSoundPlaying) {
                setPostureFeedback("Good Posture!");
            }
        }

        ctx.restore();
    }

    console.log(badPostureDuration);
    

    function resetPostureTracking() {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
        soundRef.current?.pause();
        soundRef.current.currentTime = 0;
        badPostureStartRef.current = null;
        setBadPostureDuration(0);
        setIsSoundPlaying(false);
        setIsAnalyzing(true);
        setPostureFeedback("Analyzing...");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="relative w-[640px] h-[480px]">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    width={640}
                    height={480}
                    style={{
                        position: 'absolute',
                        transform: 'scaleX(-1)',
                        borderRadius: '8px',
                    }}
                />
                <canvas
                    ref={canvasRef}
                    width={640}
                    height={480}
                    style={{
                        position: 'absolute',
                        transform: 'scaleX(-1)',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    }}
                />
            </div>

            <div className="mt-4 text-center">
                <p className="text-lg mb-2">
                    <strong>Posture Feedback:</strong>{' '}
                    <span className={postureFeedback.startsWith('Good') ? 'text-green-400' : 'text-red-500'}>
                        {!isSoundPlaying ? (
                        badPostureStartRef.current === null ? "Good Posture" : `Bad Posture for ${badPostureDuration} seconds`
                        ) : `Bad Posture - Sound Active (${badPostureDuration}s)`}
                    </span>
                </p>
                {isSoundPlaying && <div className="text-yellow-400"><strong>Buzzer Active!</strong></div>}
                <button
                    onClick={toggleCamera}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
                >
                    {cameraStarted ? 'Stop Monitoring' : 'Start Monitoring'}
                </button>
            </div>
        </div>
    );
}

export default Monitor;
