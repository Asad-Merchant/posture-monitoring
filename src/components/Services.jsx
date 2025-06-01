import React from 'react'
import CountUp from 'react-countup'
import { BlurFade } from './magicui/blur-fade'

const Services = () => {
  return (
    <BlurFade delay={0.25} inView>
        <div className='mt-6 flex flex-row items-start gap-x-36'>
            <div className='text-white flex-1/2'>
                <p className='text-xl'>
                    Improve your posture with real-time monitoring, smart vibration alerts, and personalized insights. Access your analytics across devices and get AI-powered suggestions for long-term posture correction. <span className='text-gray-400 text-lg'>Designed for students, professionals, and gamers alike—your back will thank you.</span>
                </p>
            </div>
            <div className='flex-1/2 text-white flex flex-row items-center gap-7'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex flex-row items-center gap-'>
                        <CountUp className='text-4xl' start={0} end={10000} duration={6} decimal=','/>
                        <p className='text-2xl'>+</p>    
                    </div>
                    <p className='text-[12px]'>Users Improved Posture</p>
                </div>
                <div className='w-0.5 h-12 bg-white'></div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex flex-row items-center gap-'>
                        <CountUp className='text-4xl' start={0} end={95} duration={4} decimal=','/>
                        <p className='text-2xl'>%</p>    
                    </div>
                    <p className='text-[12px]'>Satisfaction rate</p>
                </div>
                <div className='w-0.5 h-12 bg-white'></div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex flex-row items-center gap-'>
                        <CountUp className='text-4xl' start={0} end={1000} duration={8} decimal=','/>
                        <p className='text-2xl'>+</p>    
                    </div>
                    <p className='text-[12px]'>Daily Users</p>
                </div>
            </div>
        </div>
    </BlurFade>
  )
}

export default Services