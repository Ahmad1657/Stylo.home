import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Collapsedsidepanel = () => {

 const [sidePanelWidth, setSidePanelWidth] = useState("0");

  const openNav = () => {
    setSidePanelWidth("300px");
  };

  const closeNav = () => {
    setSidePanelWidth("0");
    window.scrollTo(0,0);
  };

  return (
    <div>
    <div className="sidepanel" style={{ width: sidePanelWidth }}>
      <Link className="link closebtn" onClick={closeNav}>
        &times;
      </Link>
         <h5 style={{width:'100%', textAlign:'center'}}>Menu</h5>
            <Link className='link' to={'/sale'} onClick={closeNav}>Sale</Link>
            <Link className='link' to={'/summer-24'} onClick={closeNav}>Summer'24</Link>  
            <Link className='link' to={'/women-shoes'} onClick={closeNav}>Women Shoes</Link>
            <Link className='link' to={'/women-apperals'} onClick={closeNav}>Women Apperals</Link>
            <Link className='link' to={'/bags'} onClick={closeNav}>Bags</Link>
            <Link className='link' to={'/kids'} onClick={closeNav}>Kids</Link>
            <Link className='link' to={'/accessories'} onClick={closeNav}>Accessories</Link>
            <Link className='link' to={'/fragrances'} onClick={closeNav}>Fragrances</Link>
            <Link className='link' to={'/signup'} onClick={closeNav}><div className="icon5"><CiUser /> Login/Register</div></Link>
            <Link><div className="icon6"><CiHeart /> Wishlist</div></Link>
    </div>

    <button className="openbtn sidepanelbutton" onClick={openNav}>
      ☰ 
    </button>
    
    
  </div>
);
};

export default Collapsedsidepanel;
