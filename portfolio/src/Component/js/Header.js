import React , {useState} from 'react';
import {  Link } from "react-router-dom";

import '../css/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
};
  return (
    <header className="header">
      <div className="branding">
        <h3 className="branding-text">
          <span className="code-tag"> &lt;</span> 
           RamAsheesh 
          <span className="code-tag"> /&gt;</span>
        </h3>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" onClick={closeMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/project" onClick={closeMenu}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
