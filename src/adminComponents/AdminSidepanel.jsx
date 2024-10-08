import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const AdminSidepanel = () => {

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

    const [sidePanelWidth, setSidePanelWidth] = useState("0");

    const openNav = () => {
        setSidePanelWidth("300px");
    };

    const closeNav = () => {
        setSidePanelWidth("0");
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="sidepanel" style={{ width: sidePanelWidth }}>
                <Link className="link closebtn" onClick={closeNav}>
                    &times;
                </Link>
                <h3 style={{ width: '100%', textAlign: 'center' }}> Hi ! {admin?.name} </h3>
                <p style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '100px'
                }}>
                    Want to Signoff ! Click the Button Below
                </p>
                <div style={{
                    textAlign: 'center',
                    marginTop: '100px'
                }} >
                    <button className='btn buttons mt-4' onClick={logout} style={{ backgroundColor: '#e6007e', color: '#ffffff', }}>
                        Logout
                    </button>
                </div>
            </div>

            <button className="openbtn sidepanelbutton" onClick={openNav}>
                ☰
            </button>


        </div>
    );
};

export default AdminSidepanel;