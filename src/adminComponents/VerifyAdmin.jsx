import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Verifyadmin = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        code: null,
    })
    const navigate = useNavigate();
    const { code } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_URL}/adminpanel/verifyAdmin`, formData);
        if (response.data.success) {
            // const AdminToken = (response.data.token);
            // const AdminRole = (response.data.role);

            // document.cookie = `adminToken=${AdminToken}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;
            // document.cookie = `AdminRole=${AdminRole}; path=/; expires=${new Date(Date.now() + 3600000).toUTCString()}; secure`;

            toast.success(response.data.message)
            navigate('/admin/adminhome');
        }
        else {
            toast.error(response.data.message)
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
                                <h2>Admin E-mail Verification</h2>
                            </div>

                            <div className="personalinfo"
                                style={{
                                    border: '1px solid #003366',
                                    borderRadius: '25px',
                                    padding: '35px',
                                }}>



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



                            </div>
                        </div>
                    </form>
            

            </div>
        </div>

    )
}

export default Verifyadmin;