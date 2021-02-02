import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <React.Fragment>
            <header>
                <nav>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                        <Link to='/register'><li>Join Us</li></Link>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
};

export default NavBar;