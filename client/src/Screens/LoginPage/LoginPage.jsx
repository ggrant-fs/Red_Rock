import React from 'react';
import { useState } from 'react'
import './LoginPage.css'


const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    })

    const userHandleChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const registerHandleChange = (event) => {
        const { name, value } = event.target
        setRegister((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const registerHandleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <React.Fragment>

            {/* Below are the login forms for users and companies */}

            {/* user login form */}

            <div id="Login-page-img"></div>
            <div id="user-login">
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        value={loginData.username}
                        onChange={userHandleChange}
                        placeholder='Username...'
                    />
                    <input
                        type='text'
                        name='email'
                        value={loginData.email}
                        onChange={userHandleChange}
                        placeholder='email...'
                    />
                    <input
                        type='password'
                        name='password'
                        value={loginData.password}
                        onChange={userHandleChange}
                        placeholder='Password...'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div id='register-form'>
                <form onSubmit={registerHandleSubmit}>
                    <input
                        type='text'
                        name='firstName'
                        value={register.firstName}
                        onChange={registerHandleChange}
                        placeholder="First Name..."
                    />
                    <input
                        type='text'
                        name='lastName'
                        value={register.lastName}
                        onChange={registerHandleChange}
                        placeholder="last Name..."
                    />
                    <input
                        type='text'
                        name='userName'
                        value={register.userName}
                        onChange={registerHandleChange}
                        placeholder='Username...'
                    />
                    <input
                        type='email'
                        name='email'
                        value={register.email}
                        onChange={registerHandleChange}
                        placeholder='email...'
                    />
                    <input
                        type='password'
                        name='password'
                        value={register.password}
                        onChange={registerHandleChange}
                        placeholder='password...'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>


        </React.Fragment>
    );
};

export default LoginPage;