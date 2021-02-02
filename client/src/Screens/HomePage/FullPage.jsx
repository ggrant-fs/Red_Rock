import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './FullPage.css'
const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'0CF40E0B-7B6B4E9A-B1185486-086C4E21'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div id='background-one' className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
              </button>
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
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;