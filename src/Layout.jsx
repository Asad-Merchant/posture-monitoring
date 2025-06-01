import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import FluidCursor from './components/FluidCursor/FluidCursor'

const Layout = () => {
  return (
    <div>
        <FluidCursor />
        <Outlet />
    </div>
  )
}

export default Layout