import React from 'react'

const Discounts = () => {
  return (
    <div className='container-fluid'>
      <h2 style={{textAlign:'center', marginBottom:'20px'}}>Shop By Discount</h2>
      <div className="row discountchart">
        <img className='col-12 col-lg-6 col-md-6 col-sm-12' src="https://stylo.pk/cdn/shop/files/01_84b23f8f-81b3-430b-8074-8bf1dd4bec2c_720x.jpg?v=1714975573" />
        <img className='col-12 col-lg-6 col-md-6 col-sm-12' src="https://stylo.pk/cdn/shop/files/02_a4756ba3-b750-4e68-a883-8fad8959480f_720x.jpg?v=1714975573" />
      </div>
    </div>
  )
}

export default Discounts;