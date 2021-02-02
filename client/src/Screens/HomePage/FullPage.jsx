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
                                <Link to='/'><li>Home ||</li></Link>
                                <Link to='/about'><li> About ||</li></Link>
                                <Link to='/membership'><li> Membership ||</li></Link>
                                <Link to='/login'><li> Login ||</li></Link>
                                <Link to='/register'><li> Join us</li></Link>
                            </nav>
                        </div>

                    </div>
                    <div id='background-two' className="section">
                        <p>Section 2</p>
                    </div>
                    <div id='background-three' className="section">
                        <p>Section 3</p>
                    </div>
                    <div id='background-four' className="section">
                        <p>Section 4</p>
                    </div>
                    <div id='background-five' className="section">
                        <p>Section </p>
                        <button onClick={() => fullpageApi.moveSectionDown()}></button>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;