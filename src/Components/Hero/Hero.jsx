import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import trio from '../Assets/heading.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>

                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img className="hand" src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img className="arrow" src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                    <img className="trio" src={trio} alt="" />
            </div>
        </div>
    )
}
export default Hero