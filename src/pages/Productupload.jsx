import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Await, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import Loader from '../components/Loader';

const Productupload = () => {

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode (token);
  const [loader, setLoader] = useState (false);
  const navigate = useNavigate ();
  const [admin, setAdmin] = useState (null);

  const fetchAdmin = async () => {
    setLoader(true);
    const response = await axios.get (`http://localhost:8080/api/admin/adminpanel/${decodedToken.id}`);
    if (response.data.success) {
      setAdmin(response.data.admin);
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);

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
      const response = await axios.post("http://localhost:8080/api/admin/product", data);
      if (response.data.success) {
        toast.success(response.data.message)
      }
    }
    catch (error) {
      console.error('Error uploading product:', error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    toast.success("Logout Successfully");
    navigate("/adminpanel");
  }

  return (

    <div className="content" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }} >
      <div className='container-fluid loginform' style={{ marginTop: '30px', padding: '20px 80px' }}>

        <form onSubmit={handleSubmit}>

          <div className="createteamform">

            <h1 style={{textAlign:'center', marginTop:'30px'}} >Welcome Back {admin?.name} </h1>

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
              <h2>Product Uploads</h2>
            </div>

            <div className="personalinfo"
              style={{
                border: '1px solid #003366',
                borderRadius: '25px',
                padding: '35px',
              }}>

              <div className='form-group'>
                <label>Name</label>
                <input className='form-control' type="text" name='name' value={formData.name} onChange={handleChange} />
              </div>

              <div className='form-group mt-3'>
                <label>Description</label>
                <input className='form-control'
                  type="text"
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>




              <div className='form-group mt-3'>
                <label>Category</label>
                <input className='form-control' type="text" name='category' value={formData.category} onChange={handleChange} />
              </div>

              <div className='form-group mt-3'>
                <label>Image</label>
                <input className='form-control' type="file" name='image' onChange={handleChange} />
              </div>



              <div className='form-group mt-3'>
                <label>Price</label>
                <input className='form-control' type="text" name='price' value={formData.price} onChange={handleChange} />
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom:'5px', }}>
              <button className='btn buttons mt-4' type='submit' style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                Create Product
              </button>
            </div>

            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <button className='btn buttons mt-4' onClick={logout} style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                Logout
              </button>
              <div style={{ marginTop: '30px' }}>
                <h5> Powered by | Self </h5>
            </div>
            </div>
            
          </div>

        </form>


      </div>
    </div>

  )
}

export default Productupload;
