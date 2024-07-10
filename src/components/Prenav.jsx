import React from 'react'
import { CiTextAlignCenter } from 'react-icons/ci';

const Prenav = () => {
  return (
    <div className='prenav'>
      <div class="orders" style={{fontSize:'14px'}}>Free delivery nationwide for orders above PKR3000</div>
        <div class="mov-bar">
            <marquee style={{fontSize:'14px', textAlign: 'center'}}>Use code ‘StyloApp’ on Stylo mobile app to avail a
                discount of 1000 on
                spending 5000 and ‘Stylo20’ for a discount of 500 on spending 2500 respectively.</marquee>
        </div>
        <div class="contact" style={{fontSize:'14px'}}>+92 42 111178956 support@stylo.pk</div>
    </div>
  )
}

export default Prenav;
