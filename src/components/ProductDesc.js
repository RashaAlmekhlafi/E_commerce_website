import React, { useEffect } from 'react';
import { useParams ,useLocation } from 'react-router-dom';
import { useState } from 'react'
import * as actions from '../redux/Actions/actions'
import { useRef } from "react";

import { useSelector, useDispatch } from 'react-redux'

const ProductDesc = () => {
  const remove=useRef(null)
  const add=useRef(null)
  const { pathname } = useLocation();

let { screens } = useParams();
  let { id } = useParams();
  
  useEffect(() => {
    if (pathname===`/Cart/${id}/ProductDesc`){
      remove.current.classList.remove('d-none')
      add.current.classList.add('d-none')
    }else if((pathname===`/${id}/ProductDesc`)||(pathname===`/${screens}/${id}/ProductDesc`)){
      remove.current.classList.add('d-none')
      add.current.classList.remove('d-none')
    }
  });

  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.ecommerce.ProductData)
  const [productData, setProductData] = useState([{
    "category": " ",
    "description": " ",
    "id": 0,
    "image": " ",
    "price": 0,
    "rating": { "rate": 0, "count": 0 },
    "title": " "
  }])

  useEffect(() => {
    productsData.map((data, i) => {
      if (data.id === parseInt(id)) {
        setProductData(data)
        
      }
    })
  }, [productData])

  

  return (
    <div className=" container d-flex  flex-wrap  ">
      <div className='row p-5'>
        <div className="col-12 col-md-4 " >
          <div className=" mb-4" >
            <img src={productData.image} className="card-img-top" alt="..." />
          </div>

        </div>
        <div className="col-12 col-md-8  " >
         
          <h1 className='text-primary'>{productData.title}</h1>
          <p className='fw-bold text-danger'> Price: {productData.price}$</p>  
          {/* <p className='fw-bold'>Available Pieces: {productData.rating.count}</p> */}
          <button type="button"   className="btn btn-danger w-50 d-none" onClick={()=>{
            dispatch(actions.addToCart(productData.id))
          }} ref={add} >Add to Cart</button>
          <input type="button" ref={remove}  className="btn btn-danger w-50 d-none" onClick={()=>{
            dispatch(actions.removeFromCart(productData.id))
          }} value="Remove Cart"/>
          <p>{productData.description}</p>
        </div>
      </div>
    </div>

  )
  
}
export default ProductDesc;