import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


let navButtons
function Navbar() {

    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);
    const button = useRef(null)
    let navButtonsAll = useRef(null)

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
            button.current.disabled = true
            navButtons = navButtonsAll
        }, [])
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container" ref={navButtonsAll}>
                    <Link to="/" className="navbar-logo logo-color" onClick={closeMobileMenu}>
                        AHMAD
                        <i className="far fa-smile"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        {/* <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> */}
                        <li className="nav-item"  >
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className='commingSoon nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" ref={button} className='commingSoon nav-links' onClick={closeMobileMenu}>
                                Photos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music-by-reading-face" className='nav-links' onClick={closeMobileMenu}>
                                Music
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
export { navButtons }
