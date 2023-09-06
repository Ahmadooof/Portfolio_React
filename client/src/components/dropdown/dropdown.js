import React, { useState } from 'react';
import './dropdown.scss';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option, fileUrl) => {
    setIsOpen(false);

    // Trigger the file download when an option is clicked
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = option;
      link.click();
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {'Download'}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li onClick={() => handleOptionClick('English CV', '/pdf/Ahmad Anbarje CV latest.pdf')}>
        English CV
        </li>
        <li onClick={() => handleOptionClick('Swedish CV', '/pdf/CV_Ahmad_SW.pdf')}>
        Swedish CV
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

