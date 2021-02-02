import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
const mainContainer = (props) => {
    const [benefits, setBenefits] = useState([])
    //we're going to create the state that will handle benefits
    //we'll be using a useEffect to grab the state of benefits
    useEffect(() => {

    }, [])
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

export default mainContainer;