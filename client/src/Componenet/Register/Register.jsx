import React from 'react';
import { useState } from 'react'

const Register = (props) => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        phone_number: '',
        industry: '',
        suffix: '',
        duns: ''
    })
    console.log(registerData)
    const handleChange = (event) => {
        const { name, value } = event.target
        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.handleRegister(registerData)
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={registerData && registerData.username}
                    onChange={handleChange}
                    placeholder='Username...'
                />
                <input
                    type='email'
                    name='email'
                    value={registerData && registerData.email}
                    onChange={handleChange}
                    placeholder='Email...'
                />
                <input
                    type='password'
                    name='password'
                    value={registerData && registerData.password}
                    onChange={handleChange}
                    placeholder='Password...'
                />
                <input
                    type='text'
                    name='phone_number'
                    value={registerData && registerData.phone_number}
                    onChange={handleChange}
                    placeholder='Phone #'
                />
                <input
                    type='text'
                    name='industry'
                    value={registerData && registerData.industry}
                    onChange={handleChange}
                    placeholder='Industry...'
                />
                <input
                    type='text'
                    name='suffix'
                    value={registerData && registerData.suffix}
                    onChange={handleChange}
                    placeholder='i.e. LLC'
                />
                <input
                    type='text'
                    name='duns'
                    value={registerData && registerData.duns}
                    onChange={handleChange}
                    placeholder='Duns number'
                />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
};

export default Register;