import React from 'react';
import { useState } from 'react'
import './Register.css'

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
                <h3>Company Register</h3>
                <input
                    className='register-input'
                    type='text'
                    name='username'
                    value={registerData && registerData.username}
                    onChange={handleChange}
                    placeholder='Username...'
                /> <br />
                <input
                    className='register-input'
                    type='email'
                    name='email'
                    value={registerData && registerData.email}
                    onChange={handleChange}
                    placeholder='Email...'
                /> <br />
                <input
                    className='register-input'
                    type='password'
                    name='password'
                    value={registerData && registerData.password}
                    onChange={handleChange}
                    placeholder='Password...'
                /><br />
                <input
                    className='register-input'
                    type='text'
                    name='phone_number'
                    value={registerData && registerData.phone_number}
                    onChange={handleChange}
                    placeholder='Phone #'
                /> <br />
                <input
                    className='register-input'
                    type='text'
                    name='industry'
                    value={registerData && registerData.industry}
                    onChange={handleChange}
                    placeholder='Industry...'
                /><br />
                <input
                    className='register-input'
                    type='text'
                    name='suffix'
                    value={registerData && registerData.suffix}
                    onChange={handleChange}
                    placeholder='i.e. LLC'
                /><br />
                <input
                    className='register-input'
                    type='text'
                    name='duns'
                    value={registerData && registerData.duns}
                    onChange={handleChange}
                    placeholder='Duns number'
                /><br />
                <button >Submit</button>
            </form>
        </React.Fragment>
    );
};

export default Register;