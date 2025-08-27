import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import WhyJoinUs from '../components/WhyJoinUs'
import FeatureSlider from '../components/FeatureSlider'
import Support from '../components/Support'
import DailyChanllenges from '../components/DailyChanllenges'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import WhatPeopleSay from '../components/WhatPeopleSay'
import Solutions from '../components/Solutions'
import FloatItem from '../components/FloatItem'

const Home = () => {

  const [showFloat, setShowFloat] = useState(false)
  const middleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setShowFloat(entry.isIntersecting) // ✅ only true if middle section in view
      },
      { threshold: 0.1 }
    )

    if (middleRef.current) observer.observe(middleRef.current)

    return () => {
      if (middleRef.current) observer.unobserve(middleRef.current)
    }
  }, [])

  return (
    <div className='w-full h-dvh flex flex-col items-center relative'>
        <Navbar />
        <Hero />
        <div ref={middleRef} className='w-full flex flex-col relative'>
        {showFloat && <FloatItem />}
        <FeatureSlider />
        <DailyChanllenges />
        <HowItWorks />
        <WhatPeopleSay />
        <Solutions />
        <Support />
        <WhyJoinUs />
        <div className='w-full xl:!h-[190px] lg:!h-[160px] md:!h-[120px] sm:!h-[80px] !h-[60px] bg-[#fff]'></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home