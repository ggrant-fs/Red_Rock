import React from 'react';

const EditBenefit = () => {
    const [formData, setFormData] = useState({
        membership: '',
        name: '',
        price: '',
        location: '',
        date: '',
        discount: '',
        description: '',
        expiration: '',
        length: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.handleRegister(formData)
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.handleCreate(formData)
            }}>
                <input
                    type='text'
                    name='membership'
                    value={formData.membership}
                    onChange={handleChange}
                    placeholder='membership'
                />
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='name'
                />
                <input
                    type='text'
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    placeholder='price'
                />
                <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    placeholder='location'
                />
                <input
                    type='text'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    placeholder='date'
                />
                <input
                    type='text'
                    name='discount'
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder='discount'
                />
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    placeholder='description'
                />
                <input
                    type='text'
                    name='expiration'
                    value={formData.expiration}
                    onChange={handleChange}
                    placeholder='expiration'
                />
                <input
                    type='text'
                    name='length'
                    value={formData.length}
                    onChange={handleChange}
                    placeholder='length'
                />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default EditBenefit;