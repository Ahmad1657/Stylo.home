import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { toast } from 'react-toastify';
import axios from 'axios';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const CreateNewAdmin = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: "",
        country: "",
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();
    const { name, email, gender, phone, country, password, confirmPassword } = formData;
    const options = useMemo(() => countryList().getData(), [])

    const changeCountryHandler = (selectedOption) => {
        setFormData({ ...formData, country: selectedOption ? selectedOption.value : '' });
    };
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !country || !password || !confirmPassword) {
            toast.error("Please fill out all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password Dose not Match");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/adminpanel/register`, formData);
            if (response.data.success) {
                toast.success("Register Successfully");
                navigate("/admin/adminhome/verifyadmin");
            }
            else {
                toast.error(response.data.message)
            }
        }
        catch (error) {

            toast.error("Registration failed");

        }

    }
    return (

        <div className="content">
            <div className='container-fluid loginform' style={{ marginTop: '30px', padding: '20px 80px' }}>

                <form onSubmit={handleSubmit}>

                    <div className="createteamform">

                        <div className="title"
                            style={{
                                display: 'inline-block',
                                position: 'relative',
                                top: '25px',
                                left: '25px',
                                zIndex: '1',
                                padding: '0 10px',
                                backgroundColor: 'white',
                            }}>
                            <h2>Create / Add Admin</h2>
                        </div>

                        <div className="personalinfo"
                            style={{
                                border: '1px solid #003366',
                                borderRadius: '25px',
                                padding: '35px',
                            }}>

                            <div className='form-group'>
                                <label>Name</label>
                                <input className='form-control' type="text" name='name' value={name} onChange={onChange} />
                            </div>

                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input className='form-control'
                                    type="text"
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group mt-3' style={{ display: 'flex', gap: '25px', marginLeft: '5px' }}>
                                <div className=''>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={formData.gender === "Male"}
                                            onChange={onChange}
                                            style={{ marginRight: '8px' }}
                                        />
                                        Male
                                    </label>
                                </div>

                                <div className=''>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={formData.gender === "Female"}
                                            onChange={onChange}
                                            style={{ marginRight: '8px' }}
                                        />
                                        Female
                                    </label>
                                </div>
                            </div>


                            <div className='form-group mt-3'>
                                <label>Phone</label>
                                <input className='form-control' type="text" name='phone' value={phone} onChange={onChange} />
                            </div>

                            <div className='form-group mt-3'>
                                <label> Country </label>
                                <Select options={options} name='country' value={options.find(option => option.value === country)} onChange={changeCountryHandler} />
                            </div>



                            <div className='form-group mt-3'>
                                <label>Password</label>

                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className='form-control'
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={password}
                                        onChange={onChange}
                                        maxLength='10'
                                        pattern='\d{10}'
                                        title='Enter 10 Digit Password Atleast'
                                        style={{ paddingRight: '40px' }} // Extra padding for the icon
                                    />

                                    <span
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        style={{
                                            position: 'absolute',
                                            right: '10px', // Adjust as per need
                                            cursor: 'pointer',
                                            color: '#6c757d',
                                        }}
                                    >
                                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </span>
                                </div>
                            </div>


                            <div className='form-group mt-3'>
                                <label>Password</label>

                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className='form-control'
                                        type={showPassword2 ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={confirmPassword}
                                        onChange={onChange}
                                        maxLength='10'
                                        pattern='\d{10}'
                                        title='Enter 10 Digit Password Atleast'
                                        style={{ paddingRight: '40px' }} // Extra padding for the icon
                                    />

                                    <span
                                        onClick={() => setShowPassword2((prev) => !prev)}
                                        style={{
                                            position: 'absolute',
                                            right: '10px', // Adjust as per need
                                            cursor: 'pointer',
                                            color: '#6c757d',
                                        }}
                                    >
                                        {showPassword2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </span>
                                </div>
                            </div>



                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                            <button className='btn buttons mt-4' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                                Sign Up
                            </button>
                        </div>

                    </div>

                </form>


            </div>
        </div>

    )
}

export default CreateNewAdmin;