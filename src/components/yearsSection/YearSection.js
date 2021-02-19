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
            {/* <div className='section'>
                <div className='section-container'>
                    <ul>
                        <li ref={commentSection} onClick={gotoCommentSection}>
                            <h1 className='year-heading'> 2020 </h1>
                        </li>
                        <li ref={commentSection} onClick={gotoCommentSection}>
                            <h1> 2020</h1>
                        </li>
                        <li ref={commentSection} onClick={gotoCommentSection}>2019</li>
                    </ul>
                </div>
            </div> */}
            <div className="year-container">
                <div class="menu-container">
                    <ui class="mainMenu">
                        <li class="item" id="account">
                            <a href="#account" class="btn"><i class="fas fa-user-circle"></i>My Account</a>
                            <div class="subMenu">
                                <a href="">item-1</a>
                                <a href="">item-2</a>
                                <a href="">item-3</a>
                            </div>
                        </li>
                        <li class="item" id="about">
                            <a href="#about" class="btn"><i class="fas fa-address-card"></i>About</a>
                            <div class="subMenu">
                                <a href="">item-1</a>
                                <a href="">item-2</a>
                            </div>
                        </li>
                        <li class="item" id="support">
                            <a href="#support" class="btn"><i class="fas fa-info"></i>Support</a>
                            <div class="subMenu">
                                <a href="">item-1</a>
                            </div>
                        </li>
                        <li class="item">
                            <a href="#" class="btn"><i class="fas fa-sign-out-alt"></i>Log Out</a>
                        </li>
                    </ui>
                </div>
                <div className="content-container">
                    <h1 className='year-header'>
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>

                    <h1 className='year-header'>
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>

                    <h1 className='year-header'>
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>

                    <h1 className='year-header'>
                        2021
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita harum? Ex unde iusto obcaecati consequatur vitae soluta cum dignissimos accusamus delectus, eaque perferendis, nemo eveniet similique suscipit et ea.</p>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default YearSection
