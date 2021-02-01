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
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export default Register;