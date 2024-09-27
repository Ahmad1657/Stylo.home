import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



const AdminLogin = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill out all fields");
            return;
        }

        const response = await axios.post("http://localhost:8080/api/admin/adminpanel/login", formData)
        if (response.data.success) {
            setToken(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem('token', response.data.token);
            navigate("/adminpanel/productupload")
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className="content" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>

            <div className='container-fluid loginform' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
                            <h2> AdminPanel Login </h2>
                        </div>

                        <div className="personalinfo"
                            style={{
                                border: '1px solid #003366',
                                borderRadius: '25px',
                                padding: '35px',
                            }}>

                            <div className='form-group'>
                                <label>E-mail</label>
                                <input className='form-control' type="email" name='email' value={email} onChange={onChange} />
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


                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                <button className='btn buttons mt-3' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', padding: '8px 35px' }}>
                                    Login
                                </button>
                            </div>

                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default AdminLogin;
