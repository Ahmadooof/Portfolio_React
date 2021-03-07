import React, { useEffect, useRef } from 'react'
import './VideoSection.css'

function HeroSection() {
    // function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    // // const headerRef = useRef(null)
    // // useEffect(() => {

    // // }, [])
    // // setInterval(() => {
    // //     headerRef.current.style.setProperty('--colorGenerated', getRandomColor())
    // // }, 6000);
    return (
        <div className="hero-container">
            <video src='/videos/video2.mp4' autoPlay loop muted>

            </video>
            <h1>Welcome EveryOne</h1>
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
