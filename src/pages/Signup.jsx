import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: "",
    country: "",
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate();
  const { name, email, phone, country, password, confirmPassword } = formData;
  const options = useMemo(() => countryList().getData(), [])

  const changeCountryHandler = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption ? selectedOption.value:''});
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
      const response = await axios.post("http://localhost:8080/api/admin/user/register", formData);
      toast.success("Register Successfully");
      navigate("/verifycode");
    } catch (error) {
      toast.error("Registration failed");
    }

  }
  return (

    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <label>Name:</label>
        <input type='text' name='name' value={name} onChange={onChange} />
        <label>Email:</label>
        <input type='email' name='email' value={email} onChange={onChange} />
        <label>Phone:</label>
        <input type='number' name='phone' value={phone} onChange={onChange} />
        <label>Country:</label>
        <Select options={options} name='country' value={options.find(option => option.value === country)} onChange={changeCountryHandler} />
        <label>Password:</label>
        <input type='password' name='password' value={password} onChange={onChange} />
        <label>Confirm Password:</label>
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} />

        <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }} type='submit'>
          Register
        </button>
           
        <Link className='link' to={'/login'}>
           <p>Already have an Account?</p>
        </Link>
       

      </div>
    </form>
  )
}

export default Signup;
