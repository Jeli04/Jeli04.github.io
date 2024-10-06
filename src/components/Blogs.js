// src/components/Blogs.js

import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section id="blogs" className="section" data-aos="fade-up">
            <div className="container">
                <h1>Blogs</h1>
                <p>Coming Soon!</p>
                <div className="blog-post" data-aos="fade-up" data-aos-delay="100">
                    <h2>The Singularity</h2>
                    <p>Coming Soon!</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
                {/* Repeat for more blog posts */}
            </div>
        </section>
    );
};

export default Blogs;