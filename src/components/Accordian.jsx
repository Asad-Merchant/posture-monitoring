import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BlurFade } from './magicui/blur-fade';

const Accordian = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(-1)

    const qAndAarr = [
        {
            question: "What is a software-only posture monitoring device?",
            answer: "A software-only posture monitor uses your webcam and AI models to detect and analyze your posture in real time—no extra hardware needed."
        },
        {
            question: "How does the posture detection work without sensors?",
            answer: "It leverages computer vision and machine learning to track key points of your body through your webcam, identifying slouching or improper posture."
        },
        {
            question: "Is my data safe while using this tool?",
            answer: "Yes! The posture analysis runs on system, and no video data is stored or sent anywhere unless explicitly allowed by the user."
        },
        {
            question: "Can I use it across different devices?",
            answer: "Absolutely. As long as the device has a webcam and internet/browser support, the software will function seamlessly."
        },
    ]

    const handleClick = (idx) => {
        idx === selectedQuestion ? setSelectedQuestion(-1) : setSelectedQuestion(idx)
    }

  return (
    <BlurFade delay={0.25} inView>
        <div className='mt-14 flex flex-row items-start gap-x-24 text-white'>
            <div className='flex-1/2'>
                <p className='text-4xl'>Frequently Asked Questions</p>
            </div>
            <div className='flex-1/2'>
                {
                    qAndAarr.map((item, idx) => {
                        return <div key={idx} className='flex flex-col mb-5 border p-4 rounded-2xl cursor-pointer' onClick={() => handleClick(idx)}>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='font-semibold text-lg'>{item.question}</h1>
                                {idx===selectedQuestion ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            {
                                idx===selectedQuestion ? <div className='text-gray-300 text-[16px]'>{item.answer}</div> : <></>
                            }
                        </div>
                    })
                }
            </div>
        </div>  
    </BlurFade>
  )
}

export default Accordian