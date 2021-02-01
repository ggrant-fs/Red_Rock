import React from 'react';
import { useState } from 'react'
const Register = () => {
    const { newProfile, setNewProfile } = useState({
        username: '',
        email: '',
        phone_number: '',
        industry: '',
        suffix: '',
        duns: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProfile((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefualt()
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={newProfile.username}
                    onChange={handleChange}
                    placeholder='Username...'
                />
                <input
                    type='email'
                    name='email'
                    value={newProfile.email}
                    onChange={handleChange}
                    placeholder='Email...'
                />
                <input
                    type='text'
                    name='phone_number'
                    value={newProfile.phone_number}
                    onChange={handleChange}
                    placeholder='Phone #'
                />
                <input
                    type='text'
                    name='Industry'
                    value={newProfile.industry}
                    onChange={handleChange}
                    placeholder='Industry...'
                />
                <input
                    type='text'
                    name='Suffix'
                    value={newProfile}
                    onChange={handleChange}
                    placeholder='i.e. LLC'
                />
                <input
                    type='text'
                    name='duns'
                    value={newProfile.duns}
                    onChange={handleChange}
                    placeholder='Duns number'
                />
                <butto type="submit">Submit</butto>
            </form>
        </React.Fragment>
    );
};

export default Register;