import React from 'react';
import { useState } from 'react'
import './ContactPage.css'
const ContactPage = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setContactForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <React.Fragment>
            <div id='contact-page-img'></div>
            {/* team photos are below and show be in a flex container*/}
            <div>
                <div>team img 1</div>
                <div>team img 2</div>
                <div>team img 3</div>
                <div>team img 4</div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={contactForm.name}
                    onChange={handleChange}
                    placeholder='Name...'
                />

                <input
                    type='email'
                    name='email'
                    value={contactForm.email}
                    onChange={handleChange}
                    placeholder='Email...'
                />
            </form>
        </React.Fragment>

    );
};

export default ContactPage;