import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainNavbar from '../components/MainNavbar';
import Home from '../pages/Home';
import Sale from '../pages/Sale';
import Summer24 from '../pages/Summer24';
import Womenshoes from '../pages/Womenshoes';
import Womenapperals from '../pages/Womenapperals';
import Bags from '../pages/Bags';
import Kids from '../pages/Kids';
import Accessories from '../pages/Accessories';
import Fragrances from '../pages/Fragrances';
import End from '../components/End';
import ProductDescription from '../pages/ProductDescription';
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Verifycode from "../pages/Verifycode";
import Forgotpassword from "../pages/Forgotpassword";
import Search from '../pages/Search';

// import AuthenticatedRoute from '../Authentication/AuthenticatedRoute';


const LandingPg = () => {

  return (
    <>
      <MainNavbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifycode" element={<Verifycode />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/summer-24" element={<Summer24 />} />
        <Route path="/women-shoes" element={<Womenshoes />} />
        <Route path="/women-apperals" element={<Womenapperals />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/search' element={<Search />} />

      </Routes>
      <End />


    </>
  )
}

export default LandingPg;
