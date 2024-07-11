import "./style.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes,Route } from 'react-router-dom'

import Swiper from 'swiper';
import 'swiper/css';

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import Counter from "./components/Counter";
import MainNavbar from './components/MainNavbar';
import Home from './pages/Home';
import Sale from './pages/Sale';
import Summer24 from './pages/Summer24';
import Womenshoes from './pages/Womenshoes';
import Womenapperals from './pages/Womenapperals';
import Bags from './pages/Bags';
import Kids from './pages/Kids';
import Accessories from './pages/Accessories';
import Fragrances from './pages/Fragrances';
import End from './components/End';




function App() {
    return (
    <>
    <MainNavbar />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/summer-24" element={<Summer24/>}/>
        <Route path="/women-shoes" element={<Womenshoes/>}/>
        <Route path="/women-apperals" element={<Womenapperals/>}/>
        <Route path="/bags" element={<Bags/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/fragrances" element={<Fragrances/>}/>
    </Routes>
    <End />
    {/* <Counter />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Zoom}
/> */}
   </>
    );
}

export default App;