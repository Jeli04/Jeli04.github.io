// src/components/Research.js

import React from 'react';
import './Research.css';

const Research = () => {
    return (
        <section id="research" className="section" data-aos="fade-up">
            <div className="container">
                <h1>Research</h1>
                <p>
                    My research focuses on Computer Vision for Autnomous Driving and 
                    Naural Language Processing for LLMs. I am particularly interested in Multimodality, LLM reasoning,
                    and interpretability. I'm currently in the process of finalizing multple projects and publications
                    that will hopefully be released soon. Below are the labs I've worked in so far. 
                </p>
                <ul>
                    <li><strong>Collaborative Intelligent Systems Lab:</strong> <a href="https://cisl.ucr.edu">CISL Homepage.</a></li>
                    <li><strong>Wireless Communications Sensing and Networking:</strong> <a href="https://wcsng.ucsd.edu">WCSNG Homepage.</a></li>
                    {/* Add more publications as needed */}
                </ul>
            </div>
        </section>
    );
};

export default Research;