// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="#about">Your Name</a>
                </div>
                <ul className="nav-links">
                    <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
                    <li><Link to="research" smooth={true} duration={500}>Research</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="blogs" smooth={true} duration={500}>Blogs</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;