import React from 'react'
// Icons import code below
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Prenav2 = () => {
  return (
    <div className='prenav2'>
        <div className="empty"></div>
       <div className="logo"><img src="https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679" /></div>
        <div className="icons">
            <div className="icon1"><CiSearch /></div> 
            <div className="icon2"><CiUser /></div>
            <div className="icon3"><CiHeart /></div>
            <div className="icon4"><CiShoppingCart /></div>
        </div>
    </div>
  )
}

export default Prenav2;
