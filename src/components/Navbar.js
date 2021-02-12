import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else { setButton(true) }
    }

    // To get rid of showing 'SignUp' button each time refresh page in mobile.
    useEffect(
        () => {
            showButton()
        }, []
    )

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AHMAD
                        <i class="far fa-smile"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/photos" className='nav-links' onClick={closeMobileMenu}>
                                Photos
                            </Link>
                        </li>
                    </ul>
                    <div className="btn--nav">
                        {/* {button && <Button buttonStyle="btn--outline">Click here</Button>} */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
