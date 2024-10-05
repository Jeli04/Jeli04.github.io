// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Research />
            <Projects />
            <Blogs />
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                        {/* Add more social links as needed */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;