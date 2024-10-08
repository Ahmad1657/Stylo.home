import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Counter from '../components/Counter';


const ProductDescription = () => {

    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [loader,setLoader]=useState(false);
    const fetchProduct=async()=>{
         setLoader(true);
        const response=await axios.get(`${process.env.REACT_APP_URL}/product/${id}`);
        setProduct(response.data.product)
        setLoader(false);
    }
    useEffect(()=>{
        fetchProduct();
    }, [])
  return (
    <>
  { loader ? <Loader/> : <div className='container-fluid' style={{margin:'5% 0'}}>
                             <div className="row">
                              <div className="product col-lg-6 col-md-12 col-sm-12"><img src={`http://localhost:8080/uploads/${product?.image}`}  width={450} height={350} /></div>
                                <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                                      <h3>{product?.name}</h3>
                                      <p><h6>Description:</h6>{product?.description}</p>
                                      <h6>Category : <b>{product?.category}</b></h6>
                                      <h4>US $ {product?.price}</h4>
                                     
                                      <div><Counter /></div>
                                </div>
                             </div>
                          </div>
    }
    </>
  )
}

export default ProductDescription;
