import React from 'react'
import { loginUser } from '../../services/auth/auth'
import { useState } from 'react'


const SignIn = (props) => {
    const [signInData, setSignInData] = useState({
        username: '',
        password: ''
    })
    // console.log(signInData)
    const handleChange = (event) => {
        const { name, value } = event.target
        setSignInData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.handleLogin(signInData)
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={signInData.username}
                    onChange={handleChange}
                    placeholder='Username...'
                />

                <input
                    type='password'
                    name='password'
                    value={signInData.password}
                    onChange={handleChange}
                    placeholder='Password...'
                />
                <button type='submit'>Submit</button>
            </form>
        </React.Fragment>
    );
};

export default SignIn;