import React from 'react';
import './CompanyAuth.css'
import Register from './subComponent/Register/Register'
import Login from './subComponent/Login/Login'
const CompanyAuth = (props) => {
    return (
        <div className='mainDiv'>
            <div id='form-img'></div>
            <div id='form-right-side'>
                <div id='login-input'>
                    <Login {...props} />
                </div>
                <div id='register-input'>
                    <Register {...props} />
                </div>
            </div>
        </div>
    );
};

export default CompanyAuth;