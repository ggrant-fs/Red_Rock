import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <React.Fragment>
            <header>
                <nav>
                    <ul>
                        <Link to='/' className='nav-link'><li>Home</li></Link>
                        <Link to='/about' className='nav-link' ><li>About</li></Link>
                        <Link to='/contact' className='nav-link'><li>Contact</li></Link>
                        <Link to='/login' className='nav-link'><li>Login</li></Link>
                        <Link to='/register' className='nav-link'><li>Join Us</li></Link>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
};

export default NavBar;