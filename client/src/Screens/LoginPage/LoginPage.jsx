import React from 'react';
import { useState } from 'react'

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [companyLogin, setCompanyLogin] = useState({
        companyName: '',
        companyEmail: '',
        compnayPassword: ''
    })
    const userHandleChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const companyHandleChange = (event) => {
        const { name, value } = event.target
        setCompanyLogin((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const companyHandleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <React.Fragment>
            {/* Below are the login forms for users and companies */}

            {/* user login form */}
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
            </form>
            {/* Company login form */}
            <form onSubmit={companyHandleSubmit}>
                <input
                    type='text'
                    name='CompanyName'
                    value={companyLogin.companyName}
                    onChange={companyHandleChange}
                    placeholder='Company name...'

                />
                <input
                    type='text'
                    name='CompanyEmail'
                    value={companyLogin.companyEmail}
                    onChange={companyHandleChange}
                    placeholder='Company email...'
                />
                <input
                    type='text'
                    name='CompanyPassword'
                    value={companyLogin.compnayPassword}
                    onChange={companyHandleChange}
                    placeholder='Company password...'
                />
            </form>

        </React.Fragment>
    );
};

export default LoginPage;