import React ,{ useEffect }   from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'

const Men = () =>{
  const productsData = useSelector((state) => state.ecommerce.ProductData)
  const [productData, setProductData] = useState([])
  useEffect(() => {
    const data= productsData.filter((product)=> product.category==="men's clothing")
     setProductData(data)
       
  }, [!productData])

  return (
    <div>
      <h2>Men's Clothing</h2>
      <div className="d-flex  flex-wrap  ">
        {productData.map((json, i) => {
          return <Product data={json}  key={i} />
        })}
    </div>
    </div>
  );
}

export default Men;