import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

const Summer24 = () => {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
    setLoader(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (

    <>

      { loader ? <Loader /> : <div className='pro'>
        {
          products.map((product) => {
            return (
              <div className='card' style={{ width: '18rem' }}>
                <img src={product.image} className='card-img-top' alt='...'/>
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>{product.description.slice(0 - 100)}</p>
                  <h6 className='btn btn-danger'>Id :{product.id}</h6>
                  <h6 className='btn btn-primary'>US$ {product.price}</h6>
                  <h6 className='btn btn-secondary'>Rate :{product.rating.rate}</h6>
                  <h6 className='btn btn-secondary'>Count :{product.rating.count}</h6>
                </div>
              </div>
            )
          })
        }
      </div>  }

    </>


  )
}
export default Summer24;
