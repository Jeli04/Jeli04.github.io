// src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send email, store in database)
        alert('Message sent!');
        setFormData({name: '', email: '', message: ''});
    };

    return (
        <section id="contact" className="section" data-aos="fade-up">
            <div className="container">
                <h1>Contact</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Jerry Li" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;