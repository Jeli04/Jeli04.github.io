// src/components/Blogs.js

import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section id="blogs" className="section">
            <div className="container">
                <h1>Blogs</h1>
                <p>Read my latest thoughts and insights on [Topics].</p>
                <div className="blog-post">
                    <h2>Blog Post Title</h2>
                    <p>Excerpt or summary of the blog post.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
                {/* Repeat for more blog posts */}
            </div>
        </section>
    );
}

export default Blogs;