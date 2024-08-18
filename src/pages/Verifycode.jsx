import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const Verifycode = () => {

    const [formData, setFormData] = useState({
        code: '',
    })
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const { code }=formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const response = await axios.post("http://localhost:8080/api/admin/user/verify", formData)
        console.log(response)
        if(response.data.success){
            setToken(response.data.token);
            toast.success(response.data.message);
            localStorage.setItem('token',response.data.token);
            navigate("/dashboard");
        }
        if(!code){
            toast.error(response.data.message)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center flex-column align-items-center'>
         <label>Enter Verification Code:</label>
         <input type="number"  name='code' value={code} onChange={onChange}/>
         <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }} type='submit'>
                    Verify
        </button>
        </div>
    </form>
  )
}

export default Verifycode;

