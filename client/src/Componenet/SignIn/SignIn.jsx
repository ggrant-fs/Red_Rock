import { useState } from 'react'
import React from 'react'


const SignIn = () => {
    const [signInData, setSignInData] = useState({
        userName: '',
        email: '',
        password: ''
    })
    console.log(signInData)
    const handleChange = (event) => {
        const { name, value } = event.target
        setSignInData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefualt()
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='userName'
                    value={signInData.userName}
                    onChange={handleChange}
                    placeholder='Username...'
                />
                <input
                    type='email'
                    name='email'
                    value={signInData.email}
                    onChange={handleChange}
                    placeholder='Email...'
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