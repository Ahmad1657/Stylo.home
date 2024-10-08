import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Forgotpassword = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        code: '',
    })
    const [isEmailSent, setIsEmailSent] = useState(false);
    const { email, code } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_URL}/user/forgotpassword`, formData)

        if (response.data.success) {
            toast.success(response.data.message)
            setIsEmailSent(true);
        }
        else {
            toast.error(response.data.message)
        }

    }

    const handleVerify = async (e) => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_URL}/user/verify`, formData)

        if (response.data.success) {
            const UserToken = (response.data.token);
            const UserRole = (response.data.role);
            
            document.cookie = `userToken=${UserToken}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;
            document.cookie = `userRole=${UserRole}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;

            toast.success(response.data.message)
            navigate('/');
        }
        else {
            toast.error(response.data.message)
        }

    }

    return (

        <div className='container-fluid loginform' style={{ marginTop: '30px', padding: '20px 80px' }}>
            <div className="container">
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
                        <h2> Forgot Password ? </h2>
                    </div>

                    <div className="personalinfo"
                        style={{
                            border: '1px solid #003366',
                            borderRadius: '25px',
                            padding: '35px',
                        }}>
                        {!isEmailSent ? (
                            <form onSubmit={handleSubmit}>
                                <div className='form-group mt-3'>
                                    <label className='mb-2'> Enter Your E-mail </label>
                                    <input className='form-control'
                                        type="email"
                                        name='email'
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                                    <button className='btn buttons mt-4' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                                        Next
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleVerify}>

                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className='form-control'
                                        type={showPassword ? 'text' : 'password'}
                                        name='code'
                                        value={code}
                                        onChange={onChange}
                                        maxLength='6'
                                        pattern='\d{6}'
                                        title='Enter 6 Digit Verification'
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

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                                    <button className='btn buttons mt-4' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                                        Verify Code
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Forgotpassword;

