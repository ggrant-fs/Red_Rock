import React from 'react';
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/register'><li>Join Us</li></Link>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default Layout;