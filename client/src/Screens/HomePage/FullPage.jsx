import './FullPage.css'
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom'


const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'0CF40E0B-7B6B4E9A-B1185486-086C4E21'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div id='background-one' className="section">
                        <div id='nav-container'>
                            <nav>
                                <Link to='/' className='nav-link'><li>Home</li></Link>
                                <Link to='/about' className='nav-link'><li>About</li></Link>
                                <Link to='/membership' className='nav-link'><li>Membership</li></Link>
                                <Link to='/login' className='nav-link'><li>Login</li></Link>
                                <Link to='/register' className='nav-link'><li>Join us</li></Link>
                            </nav>
                        </div>
                        <div>
                            <h1 id='title'>Enter</h1>
                            <h1>s</h1>
                        </div>
                    </div>
                    <div id='background-two' className="section">
                        <div id='nav-container2'>
                            <nav>
                                <Link to='/' className='nav-link'><li>Home</li></Link>
                                <Link to='/about' className='nav-link'><li>About</li></Link>
                                <Link to='/membership' className='nav-link'><li>Membership</li></Link>
                                <Link to='/login' className='nav-link'><li>Login</li></Link>
                                <Link to='/register' className='nav-link'><li>Join us</li></Link>
                            </nav>
                        </div>
                        <div id='split'>
                            <h1 id='section-two-title'>Luxury Concierge</h1>
                        </div>

                    </div>
                    <div id='background-three' className="section">
                        <div id='nav-container3'>
                            <nav>
                                <Link to='/' className='nav-link'><li>Home</li></Link>
                                <Link to='/about' className='nav-link'><li>About</li></Link>
                                <Link to='/membership' className='nav-link'><li>Membership</li></Link>
                                <Link to='/login' className='nav-link'><li>Login</li></Link>
                                <Link to='/register' className='nav-link'><li>Join us</li></Link>
                            </nav>
                        </div>
                        <p>Section 3</p>
                    </div>
                    <div id='background-four' className="section">
                        <div id='nav-container4'>
                            <nav>
                                <Link to='/' className='nav-link'><li>Home</li></Link>
                                <Link to='/about' className='nav-link'><li>About</li></Link>
                                <Link to='/membership' className='nav-link'><li>Membership</li></Link>
                                <Link to='/login' className='nav-link'><li>Login</li></Link>
                                <Link to='/register' className='nav-link'><li>Join us</li></Link>
                            </nav>
                        </div>
                        <p>Section 4</p>
                    </div>
                    <div id='background-five' className="section">
                        <div id='nav-container5'>
                            <nav>
                                <Link to='/' className='nav-link'><li>Home</li></Link>
                                <Link to='/about' className='nav-link'><li>About</li></Link>
                                <Link to='/membership' className='nav-link'><li>Membership</li></Link>
                                <Link to='/login' className='nav-link'><li>Login</li></Link>
                                <Link to='/register' className='nav-link'><li>Join us</li></Link>
                            </nav>
                        </div>
                        <p>Section </p>
                        <button onClick={() => fullpageApi.moveSectionDown()}></button>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;