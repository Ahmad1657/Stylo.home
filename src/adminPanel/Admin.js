import React from 'react'
import AdminLogin from '../adminPages/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import AuthenticatedRoute1 from '../Authentication/AuthenticatedRoute1';
import AdminHome from '../adminPages/AdminHome';
import Productupload from '../adminComponents/Productupload'
import AdminUserCreate from '../adminComponents/AdminUserCreate'
import PrenavAdmin from '../adminComponents/PrenavAdmin';
import AdminFooter from '../adminComponents/AdminFooter';
import CreateNewAdmin from '../adminComponents/CreateNewAdmin';
import Verifyadmin from '../adminComponents/VerifyAdmin';
import AdminForgotPass from '../adminComponents/AdminForgotPass';


const Admin = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/adminforgotpass" element={<AdminForgotPass />} />
                <Route
                    path="/*"
                    element={
                        <AuthenticatedRoute1>
                            <PrenavAdmin />
                            <Routes>
                                <Route path='/adminhome' element={<AdminHome />} />
                                <Route path="/adminhome/productupload" element={<Productupload />} />
                                <Route path='/adminhome/createuser' element={<AdminUserCreate />} />
                                <Route path='/adminhome/createadmin' element={<CreateNewAdmin />} />
                                <Route path='/adminhome/verifyadmin' element={<Verifyadmin />} />
                            </Routes>
                            <AdminFooter />
                        </AuthenticatedRoute1>
                    }
                />
            </Routes>
        </>
    )
}

export default Admin;
