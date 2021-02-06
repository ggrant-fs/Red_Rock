import React from 'react';
import './Benefits.css'
import { Link } from 'react-router-dom'

const Benefits = (props) => {

    return (
        <div>

            <div id='main-image'></div>
            <div id='container-one'>
                {/* <div className='break'></div> */}
                <div id='container-img1' className='container-one-images'></div>
                <div className='break'></div>
                <div id='container-img2' className='container-one-images'></div>
                <div className='break'></div>
                <div id='container-img3' className='container-one-images'></div>
                <div className='break'></div>
                <div id='container-img4' className='container-one-images'></div>
                <div className='break'></div>
                <div id='container-img4' className='container-one-images'></div>
            </div>
            <hr />
            <div id='container-two'>
                {/* <div id='break-container2'></div> */}
                <div className='container-two-images'></div>
                <div id='break-container2'></div>
                <div className='container-two-images'></div>
                <div id='break-container2'></div>
            </div>

            <h3>Benefits</h3>
            {props.benefits.map(benefit => (
                <div key={benefit.id}>
                    {benefit.name}
                    <button onClick={(e) => props.handleDelete(benefit.id)} >Delete</button>
                    <Link to={`/company/benefits/${id}/edit`}><button>Edit</button></Link>
                </div>

            ))
            }

            <Link to='/company/benefits/new'><button>create</button></Link>



        </div >
    );
};

export default Benefits;