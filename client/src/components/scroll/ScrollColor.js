import React from 'react'
import './ScrollIndecatior.css'


const ScrollColor = () => {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
    }, false);
    return (
        <>
            <div className="progress"></div>
        </>
    )
}

export default ScrollColor
