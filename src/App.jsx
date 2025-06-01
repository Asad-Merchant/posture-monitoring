import { useState } from 'react'
import { Button } from './components/ui/button'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Services from './components/Services'
import Accordian from './components/Accordian'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
      {/* <Button>Click Me</Button> */}
    </>
  )
}

export default App
