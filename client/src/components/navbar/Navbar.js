import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../dropdown/dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // Add state for dropdown
  const button = useRef(null);
  let navButtonsAll = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setClick(false); // Close the menu on window resize
    }
  };


  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  useEffect(() => {
    showButton();
    button.current.disabled = true;
    navButtonsAll = navButtonsAll;
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={`navbar ${click ? 'active' : ''}`}>
        <div className="navbar-container" ref={navButtonsAll}>
          <Link to="/" className="navbar-logo logo-color" onClick={closeMobileMenu}>
            Home
            {/* <i className="far fa-smile"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={`nav-menu ${click ? 'active' : ''}`}>
            <li className="nav-item">


              <Dropdown></Dropdown>
            </li>
            <li className="nav-item">
              <Link to="projects" ref={button} className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

          </ul>
          <div className="btn--nav">{/* Add any additional elements here */}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;