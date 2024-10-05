// src/components/Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h1>Projects</h1>
                <p>Here are some of the projects I have worked on:</p>
                <div className="project">
                    <h2>Project Title</h2>
                    <p>Description of the project. Technologies used: [Tech Stack].</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                {/* Repeat for more projects */}
            </div>
        </section>
    );
}

export default Projects;