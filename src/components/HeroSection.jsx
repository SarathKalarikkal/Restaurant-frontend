import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <section className='heroSection' id='heroSection'>
        <Navbar />
        <div className=" heroBg">
            <div className="banner">
                <div>
                <h1 className='heroTitle'>Reserve Your Culinary Adventure Today!</h1>
                <p className='heroPara'>Book your dining experience now and enjoy unforgettable tastes and experiences!</p>
                </div>
            </div>
            <div className="banner">
                <img src="/heroRightRound.png" className='heroImageRound' alt="" />
            </div>


            
        </div>
    </section>
  )
}

export default HeroSection
