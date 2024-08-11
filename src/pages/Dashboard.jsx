import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    setLoader(true);
    const response = await axios.get(`http://localhost:8080/api/admin/user/${decodedToken.id}`);
    if (response.data.success) {
      setUser(response.data.user);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("User Logout Successfully");
    navigate("/");
  }

  return (

    <div>
      {
        loader ? <Loader /> :
          (<>
            <h1>Welcome to the Dashboard {user?.name}</h1>
            <button className='btn btn-primary' onClick={logout}>Logout</button>
          </>)
      }
    </div>
  )
}

export default Dashboard;
