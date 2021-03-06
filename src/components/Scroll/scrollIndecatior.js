import React from 'react'
import './scrollIndercator.css'


const ScrollIndecatior = () => {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
    }, false);
    return (
        <>
            <div className="progress"></div>
        </>
    )
}

export default ScrollIndecatior
