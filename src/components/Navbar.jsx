import React from 'react'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between text-white p-5 bg-white/10 backdrop-blur-2xl'>
        <div>
            <h1 className='text-2xl font-semibold'>Posture</h1>
        </div>
        <div className='flex flex-row items-center gap-4'>
            <NavLink to='/login' className="border-0 bg-transparent text-[16px] hover:underline hover:bg-transparent transition-all cursor-pointer">Login</NavLink>
            <NavLink to='/signup' className="px-3.5 py-1.5 rounded-lg bg-red-600 text-[16px] cursor-pointer transition-all hover:shadow-[0px_0px_12px_oklch(70.4%_0.191_22.216)] hover:bg-red-600" >Sign Up</NavLink>
        </div>
    </div>
  )
}

export default Navbar