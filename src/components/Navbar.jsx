import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <hr className='line'/>
    <div className='navbar1'>
            <Link className='link' to={'/sale'}>Sale</Link>
            <Link className='link' to={'/summer-24'}>Summer'24</Link>  
            <Link className='link' to={'/women-shoes'}>Women Shoes</Link>
            <Link className='link' to={'/women-apperals'}>Women Apperals</Link>
            <Link className='link' to={'/bags'}>Bags</Link>
            <Link className='link' to={'/kids'}>Kids</Link>
            <Link className='link' to={'/accessories'}>Accessories</Link>
            <Link className='link' to={'/fragrances'}>Fragrances</Link>
    </div>
    </>
  )
}

export default Navbar;
