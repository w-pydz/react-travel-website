import React from 'react'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET START
                </button>
            </div>
        </div>
    )
}

export default HeroSection
