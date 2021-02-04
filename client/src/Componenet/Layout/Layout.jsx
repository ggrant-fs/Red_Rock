import React from 'react';
// import { Link } from 'react-router-dom'
import NavBar from '../../Componenet/NavBar/NavBar'
import './Layout.css'
const Layout = (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <div className='mainContainer'>
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default Layout;