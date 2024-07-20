import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { toast } from 'react-toastify';


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
    setFormData({ ...formData, country: selectedOption });
  };
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Dose not Match")
    }
    else {
      console.log(formData)
      toast.success("Register Successfully")
      navigate("/")
    }

  }
  return (

    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <label>Name:</label>
        <input type='text' name='name' value={name} onChange={onchange} />
        <label>Email:</label>
        <input type='email' name='email' value={email} onChange={onchange} />
        <label>Phone:</label>
        <input type='number' name='phone' value={phone} onChange={onchange} />
        <label>Country:</label>
        <Select options={options} name='country' value={country} onChange={changeCountryHandler} />
        <label>Password:</label>
        <input type='password' name='password' value={password} onChange={onchange} />
        <label>Confirm Password:</label>
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={onchange} />

        <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }}>
          Register
        </button>
      </div>
    </form>
  )
}

export default Signup;
