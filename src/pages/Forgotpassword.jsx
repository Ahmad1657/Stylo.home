import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {

    
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        email: '',
    })
    const { email }=formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit=async (e) =>{
        e.preventDefault();

        const response = await axios.post("http://localhost:8080/api/admin/user/forgotpassword", formData)

        if(response.data.success){
            toast.success(response.data.message)
            navigate('/verifycode');
        }
        else{
            toast.error(response.data.message)
        }
       
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='form1 d-flex justify-content-center flex-column align-items-center'>
            <label>Enter Email:</label>
            <input type="email" name='email' value={email} onChange={onChange}/>
            <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff'}} type='submit'>
                Send Email
            </button>
        </div>
        {/* <div className="form2 d-flex justify-content-center flex-column align-items-center">
            <label>Enter Verification Code:</label>
            <input type="number" name='code' value={code} onChange={onChange} />
            <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff'}} type='submit'>
                Verify
            </button>
         </div> */}
    </form>
  )
}

export default Forgotpassword;
