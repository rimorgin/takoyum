import React from 'react'
import HeroImgCarousel from '../Components/HeroImgCarousel'
import home from '@styles/Home.module.css'

import logo from '@images/takoyum.png'


const Home = () => {
  return (
    <div className={home.sections}>
      <div className={home.heroSection}>
        <div className={home.heroContent}>
          <h1 className={home.heroTitle}>Welcome to Takoyum</h1>
        </div>
      </div>
      <div className={home.menuSection}>
      </div>
    </div>
  )
}

export default Home