// src/App.js

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
// import Loader from './components/Loader'; // Optional: If using a loader
import './App.css';
import AOS from 'aos';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true,     // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <About />
            <Research />
            <Projects />
            <Blogs />
            <Contact />
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Jerry Li. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jerryli2025/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Jeli04" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        {/* Add more social links as needed */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;