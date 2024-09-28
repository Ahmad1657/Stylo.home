import React, { useEffect } from 'react'
import AdminLogin from '../pages/AdminLogin';
import Productupload from '../pages/Productupload'
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthenticatedRoute1 from '../Authentication/AuthenticatedRoute1';


const Admin = () => {
   
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route
                    path="/*"
                    element={
                        <AuthenticatedRoute1>
                            <Routes>
                                <Route path="/productupload" element={<Productupload />} />
                            </Routes>
                        </AuthenticatedRoute1>
                    }
                />
            </Routes>
        </>
    )
}

export default Admin;
