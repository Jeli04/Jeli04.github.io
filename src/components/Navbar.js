// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="#about">Jerry Li</a>
                </div>
                <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <li>
                        <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setMenuActive(false)}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="research" smooth={true} duration={500} offset={-70} onClick={() => setMenuActive(false)}>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-70} onClick={() => setMenuActive(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="blogs" smooth={true} duration={500} offset={-70} onClick={() => setMenuActive(false)}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setMenuActive(false)}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className="toggle-button" onClick={toggleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;