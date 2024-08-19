import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {
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

        if ( !email || !password ) {
            toast.error("Please fill out all fields");
            return;
          }

        const response = await axios.post("http://localhost:8080/api/admin/user/login", formData)
        if (response.data.success) {
            setToken(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem('token',response.data.token);
            navigate("/dashboard");
        }
        else {
            toast.error(response.data.message)
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Email:</label>
                <input type='email' name='email' value={email} onChange={onChange} />
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={onChange} />
                <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }} type='submit'>
                    Login
                </button>
                <Link className='link' to={'/forgotpassword'}>
                    <p>Forgot Password?</p>
               </Link>
            </div>
        </form>
    )
}

export default Login;
