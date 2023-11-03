import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
