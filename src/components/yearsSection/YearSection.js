import React, { useRef } from 'react'
import './YearSection.css'

function YearSection() {
    const commentSection = useRef(null);

    const gotoCommentSection = () =>
        window.scrollTo({
            top: commentSection.current.offsetTop,
            behavior: "smooth"
        });

    return (
        <>
            <div className="nav-container">
                <nav>
                    <ul className="li" ref={commentSection} onClick={gotoCommentSection}>2021</ul>
                    <ul className="li">2020</ul>
                    <ul className="li">2019</ul>
                </nav>
            </div>
        </>
    )
}

export default YearSection
