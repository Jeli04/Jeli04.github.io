// src/components/About.js

import React from 'react';
import './About.css';
import profile from '../assets/profile.jpg'; // Add your profile picture in src/assets/

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h1>About Me</h1>
                <img src={profile} alt="Profile" className="profile-pic" />
                <p>
                    Welcome! I am [Your Name], a PhD/Master student in Computer Science at UC Riverside.
                    My interests include [Your Interests].
                </p>
            </div>
        </section>
    );
}

export default About;