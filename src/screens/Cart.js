import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Product from '../components/product'



const Cart = () => {

    const cart_items = useSelector((state) => state.ecommerce.cart_items)
    const productsData = useSelector((state) => state.ecommerce.ProductData)
    const [Messg, setMessg] = useState('.')

    useEffect(() => {
        if (cart_items.length == 0) { setMessg("Your cart is empty") }

    });

    var result = []
    var total=0;
   
    for (var i = 0; i < cart_items.length; i++) {
        result = [...result, productsData.filter((productData) => productData.id === cart_items[i])]
        total += result[0][0].price
    }
    
    return (
        <div>
             <div className='col-12 d-flex justify-content-center text-primary'>{Messg}</div>
            
            <div className="d-flex  flex-wrap  ">
            
                {result.map((json, i) => {
                    return <Product data={json[0]} Cart={true} key={i} />
                })
                }

            </div>
            <div className='col-12 d-flex justify-content-center text-primary fs-1'>Total : {total}$</div>
        </div>
    )


}
export default Cart;