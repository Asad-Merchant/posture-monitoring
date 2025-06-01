import { Meteors } from "../components/magicui/meteors";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import { BorderBeam } from "./magicui/border-beam";
import { BlurFade } from "./magicui/blur-fade";

export function Hero() {
  return (
    <BlurFade delay={0.25} inView>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Meteors number={30} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-white text-center text-8xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
          Sit Smart, Live Better.
        </span>
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-gray-200 text-center text-[14px] leading-5 mt-8 max-w-2xl font-semibold dark:from-white dark:to-slate-900/10">
        Improve your posture and boost your well-being with our smart posture monitoring device. Real-time feedback, easy tracking, and long-term health benefits—right from your desk.
        </span>
        
        <Button className="mt-4 text-[18px] bg-transparent border p-5 flex flex-row items-center gap-4 hover:shadow-[0px_0px_30px_oklch(26.8%_0.007_34.298)] cursor-pointer">
            Get Started <FaArrowRight />
                
        </Button>
      </div>
    </BlurFade>
  );
}
