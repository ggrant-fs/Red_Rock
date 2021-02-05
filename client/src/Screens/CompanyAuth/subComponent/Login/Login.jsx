import React from 'react';
import { useState } from 'react'
import './Login.css'
const Login = (props) => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setLogin((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.handleCompanyLogin(login)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Company Login</h3>
                <input
                    id='account-login'
                    type='text'
                    name='username'
                    value={login.username}
                    onChange={handleChange}
                    placeholder='Username'
                /><br />
                <input
                    id='account-password'
                    type='password'
                    name='password'
                    value={login.password}
                    onChange={handleChange}
                    placeholder='Password'
                /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;