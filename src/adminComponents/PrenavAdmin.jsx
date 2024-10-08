import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import Loader from '../components/Loader';
import AdminSidepanel from './AdminSidepanel';

const PrenavAdmin = () => {
    const AdminToken = document.cookie.match(/adminToken=([^;]*)/);
    const decryptedToken = CryptoJS.AES.decrypt(AdminToken[1], 'your_secret_key').toString(CryptoJS.enc.Utf8);
    const [Loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);

    const fetchAdmin = async () => {
        setLoader(true);

        const tokenParts = decryptedToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const adminId = payload.id; // Assuming the admin ID is stored in the 'id' claim

        if (!adminId) {
            toast.error('Admin ID is not found in the JWT token');
            return;
        }

        const response = await axios.get(`${process.env.REACT_APP_URL}/adminpanel/${adminId}`);
        if (response.data.success) {
            setAdmin(response.data.admin);
            setLoader(false);
        }
    };
    useEffect(() => {
        fetchAdmin();
    }, []);

    const logout = () => {
        document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "adminRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        toast.success("Logout Successfully");
        navigate("/admin");
    }
    return (
        <>
            <div className='prenav2' style={{ margin: '0px' }} >

                <div className='prenavAdmin1' style={{
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px'
                }}>
                    <h2 className='prenavAdmin' style={{ padding: '10px' }} > Hi ! {admin?.name} </h2>
                </div>

                <div className="admincollapsedsidepanel p-3">
                    <AdminSidepanel />
                </div>

                <div className="logo" style={{ padding: '10px' }} >
                    <img src="https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679" />
                </div>

                <div className="prenavAdmin1"
                    style={{
                        textAlign: 'center',
                    }} >
                    <button className='btn buttons mt-4' onClick={logout} style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                        Logout
                    </button>
                </div>




            </div>
            <hr className='line' style={{ margin: '0px' }} />
        </>
    )
}

export default PrenavAdmin;
