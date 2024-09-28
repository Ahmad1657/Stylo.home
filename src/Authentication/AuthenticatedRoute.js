// auth.js
import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
const secretKey = 'your_secret_key';

const AuthenticatedRoute = ({ children }) => {

  const userToken = localStorage.getItem('userToken');
  const userRole = localStorage.getItem('userRole');

  if (!userToken || !userRole) {
    return <Navigate to="/login" />;
  }
  try{
    const decryptedToken = CryptoJS.AES.decrypt(userToken, 'your_secret_key').toString(CryptoJS.enc.Utf8);
    const decryptedRole = CryptoJS.AES.decrypt(userRole, 'your_secret_key').toString(CryptoJS.enc.Utf8);
    if(!decryptedToken || decryptedRole !== "user"){
      return <Navigate to="/login" />;
    }
    return children;
  }
  catch(err){
    console.log(err);
    return <Navigate to="/login" />;
  }
};

export default AuthenticatedRoute;