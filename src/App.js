import "./style.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from 'react-router-dom'

import 'swiper/css';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPg from "./landingPage/LandingPg";
import Admin from "./adminPanel/Admin";

function App() {
    return (
        <>

            <Routes>
                <Route path="*" element={<LandingPg />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />

        </>
    );
}

export default App;