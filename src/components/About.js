// src/components/About.js

import React from 'react';
import './About.css';
import profile from '../assets/profile.jpg'; // Ensure you have a profile.jpg in src/assets/

const About = () => {
    return (
        <section id="about" className="section" data-aos="fade-up">
            <div className="container">
                <h1>About Me</h1>
                <img src={profile} alt="Profile" className="profile-pic" />
                <p>
                    Welcome! I am Jerry Li, a Undergrduate student studying Computer Science at UC Riverside.
                    I currently do research priamrily in the field of Computer Vision for Autnomous Driving and 
                    Naural Language Processing for LLMs. I'm particularly interested in Multimodality, LLM reasoning,
                    and interpretability. A little bit more about me is that I enjoy playing tennis, going to gym, 
                    and playing video games in my free time. Welcome to my profile!
                </p>
            </div>
        </section>
    );
};

export default About;