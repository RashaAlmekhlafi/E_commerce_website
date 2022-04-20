import React, { useEffect } from 'react';
import Product from '../components/product'
import * as actions from '../redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch();
  const productData=useSelector((state) => state.ecommerce.ProductData)

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        response.json()
          .then((data) => {
            dispatch(actions.StoreData(data));
          })
          .catch((jsonError) => {
            console.log('Error in JSON', jsonError)
          })
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
  }, [!productData])


  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex  flex-wrap  ">
        {productData.map((json, i) => {
          return <Product data={json}  key={i} />
        })
        }
       
      </div>
    </div>

  );
}

export default Home;