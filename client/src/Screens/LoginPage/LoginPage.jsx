import React from 'react';
// import { useState } from 'react'
import './LoginPage.css'
import '../../Componenet/SignIn/SignIn'
import SignIn from '../../Componenet/SignIn/SignIn';


const LoginPage = (props) => {


    return (
        <React.Fragment>
            <SignIn handleLogin={props.handleLogin} />
        </React.Fragment>
    );
};

export default LoginPage;