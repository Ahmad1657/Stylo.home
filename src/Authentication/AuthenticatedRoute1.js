import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const AuthenticatedRoute1 = ({ children }) => {
    const adminToken = document.cookie.match(/adminToken=([^;]*)/);
    const adminRole = document.cookie.match(/adminRole=([^;]*)/);
    
    if (!adminToken || !adminRole) {
        return <Navigate to="/admin" />;
    }
    try {
        const decryptedToken = CryptoJS.AES.decrypt(adminToken[1], 'your_secret_key').toString(CryptoJS.enc.Utf8);
        const decryptedRole = CryptoJS.AES.decrypt(adminRole[1], 'your_secret_key').toString(CryptoJS.enc.Utf8);
        
        if (!decryptedToken || decryptedRole !== "admin") {
            return <Navigate to="/admin" />;
        }
        return children;
    }
    catch (err) {
        console.log(err);
        return <Navigate to="/admin" />;
    }
};

export default AuthenticatedRoute1;