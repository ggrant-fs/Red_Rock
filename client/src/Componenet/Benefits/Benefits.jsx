import React from 'react';
import { useState } from 'react'

const Benefits = () => {
    const { companyBenefits, setCompanyBenefits } = useState({
        membership: '',
        name: '',
        price: '',
        location: '',
        date: '',
        discount: '',
        expiration: '',

    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCompanyBenefits((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <React.Fragment>
            <form>
                <input
                    type='text'
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
                <input
                    type=''
                    name=''
                    value={ }
                    onChange={ }
                    placeholder=''
                />
            </form>
        </React.Fragment>
    );
};

export default Benefits;

// create_table "benefits", force: :cascade do |t|
//     t.string "membership"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.string "name"
//     t.integer "price"
//     t.string "location"
//     t.string "date"
//     t.string "discount"
//     t.string "description"
//     t.string "expiration"
//     t.string "length"
//   end
