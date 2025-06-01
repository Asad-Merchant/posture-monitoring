import React from 'react'
import { Hero } from '../components/Hero'
import Services from '../components/Services'
import Accordian from '../components/Accordian'
import { Review } from '../components/Review'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
        <Hero />
        <div className='max-w-7xl mx-auto'>
            <Services />
            <Products />
            <Accordian />
            <Review />
        </div>
    </>
  )
}

export default Home