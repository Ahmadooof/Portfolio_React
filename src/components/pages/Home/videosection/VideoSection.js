import React from 'react'
import './VideoSection.css'

function HeroSection() {

    return (
        <div className="hero-container">
            <video className="home-video" src='videos/video2.mp4' autoPlay loop muted>
            </video>
            <h1>Welcome home</h1>
            {/* <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>Watch Trailer
                    <i className='far fa-play-circle'></i>
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection
