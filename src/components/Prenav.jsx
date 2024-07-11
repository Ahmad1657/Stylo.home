import React from 'react'

const Prenav = () => {
  return (
    <div className='prenav'>
      <div className="orders" style={{fontSize:'14px'}}>Free delivery nationwide for orders above PKR3000</div>
        <div className="mov-bar">
            <marquee style={{fontSize:'14px', textAlign: 'center'}}>Use code ‘StyloApp’ on Stylo mobile app to avail a
                discount of 1000 on
                spending 5000 and ‘Stylo20’ for a discount of 500 on spending 2500 respectively.</marquee>
        </div>
        <div className="contact" style={{fontSize:'14px'}}>+92 42 111178956 support@stylo.pk</div>
    </div>
  )
}

export default Prenav;
