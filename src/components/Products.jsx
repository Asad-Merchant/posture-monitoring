"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import hardware from '../assets/hardware_device.jpg'
import software from '../assets/software.jpg'
import { BlurFade } from "./magicui/blur-fade";

export default function Products() {
  return (
    <BlurFade delay={0.3} inView>
        <div className="flex flex-col mt-[80px]">
            <h1 className="text-center text-5xl font-semibold text-white">Our Products</h1>
            <p className="text-gray-400 mt-4 text-center">Our meticulously engineered posture monitoring device is designed for all-day comfort and accuracy. It gently tracks your spinal alignment and provides real-time feedback through subtle vibrations, encouraging you to maintain optimal posture without disrupting your daily routine. </p>
            <div className="flex flex-row gap-[120px] -mt-[20px] items-center justify-center">
                <CardContainer className="inter-var">
                    <CardBody
                        className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-50/[.10] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-semibold text-white">
                        Experience effortless posture correction. Our sleek, wearable devices gently monitor your alignment, providing subtle cues for a healthier you, all day long.
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className=" text-sm max-w-sm mt-2 text-neutral-300">
                        Discreetly track and improve your posture with our comfortable, intelligent wearable devices.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={hardware}
                            height="1000"
                            width="1000"
                            className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href="#"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                            Try now →
                        </CardItem>
                        {/* <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold">
                            Sign up
                        </CardItem> */}
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody
                        className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-50/[.10] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-semibold text-white">
                        Unlock your posture insights. Visualize your progress, receive personalized feedback, and access expert guidance to cultivate lasting, healthy habits.
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className=" text-sm max-w-sm mt-2 text-neutral-300">
                        Gain personalized insights and expert tools to achieve and maintain optimal posture.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={software}
                            height="1000"
                            width="1000"
                            className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href="#"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                            Try now →
                        </CardItem>
                        {/* <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold">
                            Sign up
                        </CardItem> */}
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    </BlurFade>
  );
}
