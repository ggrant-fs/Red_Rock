import React from 'react';
import { useState } from 'react'
import HeaderImage from '../../Componenet/HeaderImage/HeaderImage'

const CompanyForm = () => {
    const [companyLogin, setCompanyLogin] = useState({
        companyName: '',
        companyEmail: '',
        compnayPassword: ''
    })

    const HandleChange = (event) => {
        const { name, value } = event.target
        setCompanyLogin((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <React.Fragment>
            <HeaderImage />
            {/* make a flexbox container */}
            <div>
                <div id='box-one'>Image 1</div>
                <div id='box-two'>Image 2</div>
                <div id='box-three'>Image 3</div>
                <div id='box-four'>Image 4</div>
            </div>
            <hr />
            {/* second flexbox container */}
            <div>
                <div id='box-five'>Image 5</div>
                <div id='box-six'>Image 6</div>
            </div>
            <hr />
            {/* create a form  */}
            <form onSubmit={HandleSubmit}>
                <input
                    type='text'
                    name='CompanyName'
                    value={companyLogin.companyName}
                    onChange={HandleChange}
                    placeholder='Company name...'

                />
                <input
                    type='text'
                    name='CompanyEmail'
                    value={companyLogin.companyEmail}
                    onChange={HandleChange}
                    placeholder='Company email...'
                />
                <input
                    type='text'
                    name='CompanyPassword'
                    value={companyLogin.compnayPassword}
                    onChange={HandleChange}
                    placeholder='Company password...'
                />
            </form>
        </React.Fragment>
    );
};

export default CompanyForm;