import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Womenapperals = () => {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    const response = await axios.get('http://localhost:8080/api/admin/product?category=cycle')
    setProducts(response.data.products)
    setLoader(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>

      {loader ? <Loader /> : <div className='pro'>
        {
          products.map((product) => {
            return (
              <Link to={`/product/${product._id}`}>
                <div className='card' style={{ width: '18rem' }}>
                  <img src={product.image} className='card-img-top' alt='...' width={400} height={200}/>
                  <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.description.slice(0 - 100)}</p>
                    <h6 className='btn btn-secondary'>Class :{product.category}</h6>
                    <h6 className='btn btn-primary'>US$ {product.price}</h6>
                    
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>}

    </>


  )
}
export default Womenapperals;
