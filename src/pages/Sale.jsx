import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Sale = () => {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    const response = await axios.get(`${process.env.REACT_APP_URL}/product?category=suv`)
    setProducts(response.data.products)
    setLoader(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>

      {loader ? (
        <Loader />
      ) : (
        <div className='pro'>
          {products && products.length > 0 ? (
            products.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div className='card' style={{ width: '18rem' }}>
                  {product.image && ( // Ensure product.image exists before rendering
                    <img
                      src={`http://localhost:8080/uploads/${product.image}`}
                      className='card-img-top'
                      alt={product.name}
                      width={400}
                      height={200}
                    />
                  )}
                  <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.description.slice(0, 100)}...</p> {/* Slicing the description */}
                    <h6 className='btn btn-secondary'>Class: {product.category}</h6>
                    <h6 className='btn btn-primary'>US$ {product.price}</h6>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p style={{
              margin: '25px 0px',
            }} >No product found.</p>
          )}
        </div>
      )}
    </>


  )
}
export default Sale;