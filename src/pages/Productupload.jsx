import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Productupload = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        image: null,
        price: '',
    })


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'image' ? files[0] : value, // Set file for image, value for others
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('image', formData.image); // Append the image file
        data.append('price', formData.price);

        try {
            const response = await axios.post('http://localhost:8080/api/admin/product', data);
            if(response.data.success){
                toast.success(response.data.message)
            }
        }
        catch (error) {
            console.error('Error uploading product:', error);
        }
    }

    return (
        <div className='container-fluid'>

            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                    <label>Name</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} />
                    <label>Description</label>
                    <input type="text" name='description' value={formData.description} onChange={handleChange} />
                    <label>Category</label>
                    <input type="text" name='category' value={formData.category} onChange={handleChange} />
                    <label>Image</label>
                    <input type="file" name='image' onChange={handleChange} />
                    <label>Price</label>
                    <input type="number" name='price' value={formData.price} onChange={handleChange} />

                    <button className='btn' style={{ backgroundColor: '#e6007e', color: 'white' }} type='submit' >
                        Create Product
                    </button>

                </div>
            </form>

        </div>
    )
}

export default Productupload;
