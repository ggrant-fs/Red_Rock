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
                            <h1 id='sec-one-intro'>Life Lavish <span id='sec-one-span'>and</span> Luxury Elite</h1>
                            <div id='container-logos'>
                                <div id='cnn-logo'>
                                    <img id='bbc-logo' alt='' src='https://fontmeme.com/permalink/210203/4812477f0573952bfd586c03abf0105b.png' />
                                </div>
                                <div id='ny-times-logo'>
                                    <img alt='' src='https://i.imgur.com/Ljnfyt4.png' />
                                </div>
                                <div>
                                    <img alt='' src='https://fontmeme.com/permalink/210203/76071269cdf21135fa2ab7f883e971c5.png' />
                                </div>
                            </div>
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
                            <p id='sec-two-content'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                            <p id='sec-two-content-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
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
                            <div id='logo-sec3'>
                                <img alt='' src='https://i.imgur.com/PjdhYGl.png?1' />
                            </div>
                        </div>
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
                            <div id='logo-sec4'>
                                <img alt='' src='https://i.imgur.com/PjdhYGl.png?1' />
                            </div>
                            <div id='member-box'>

                            </div>
                        </div>
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
                            <div id='split-2'>
                                <h1 id='section-five-title'>The Lifestyle</h1>
                                <p className='sec-five-content'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                <p className='sec-five-content'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    {/* nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. */}
                                </p>
                                <p className='sec-five-content'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        {/* <button onClick={() => fullpageApi.moveSectionDown()}></button> */}
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;