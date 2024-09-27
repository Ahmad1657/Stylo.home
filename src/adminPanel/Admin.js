import React, { useEffect } from 'react'
import AdminLogin from '../pages/AdminLogin';
import Productupload from '../pages/Productupload'
import { Routes, Route, useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/adminpanel');
        }
    }, [navigate, token]);

    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                {token &&
                    <Route path="/productupload" element={<Productupload />}
                    />}
            </Routes>
        </>
    )
}

export default Admin;
