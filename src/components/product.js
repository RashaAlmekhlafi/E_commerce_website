import React, { useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import * as actions from '../redux/Actions/actions'
import { useDispatch } from 'react-redux'
import { useRef } from "react";

const Product = (props) => {
  
    const dispatch = useDispatch();
    const remove=useRef(null)
    const add=useRef(null)

    useEffect(() => {
    if (props.Cart === true) {
        remove.current.classList.remove('d-none')
        add.current.classList.add('d-none')
       
    } else {
        remove.current.classList.add('d-none')
        add.current.classList.remove('d-none')
        
    }
});
    const desc = props.data.description.substring(0, 100);
    return (
        <div>
            <div className="col-12 col-md-3 p-1 m-1" >
                <div className="card mb-3" style={{ "width": "300px", "height": "900px" }}>
                    <NavLink to={`${props.data.id}/ProductDesc`}><img src={props.data.image} className="card-img-top" alt="..." /></NavLink>

                    <div className="card-body">
                        <h4 className="card-title">{props.data.title}</h4>
                        <p className='fw-bold text-danger'>Rating: {props.data.rating.rate}  Price: {props.data.price}$</p>
                        <h6 className='fw-bold'>Available Pieces: {props.data.rating.count}</h6>
                        <h6 className='text-success' >Category: {props.data.category}</h6>
                        <p className="card-text">{desc}</p>
                        <button type="button" ref={add} className="btn btn-danger w-50 d-none" onClick={() => {
                            dispatch(actions.addToCart(props.data.id))
                        }} >Add to Cart</button>
                        <button type="button" ref={remove}  className="btn btn-danger w-100 d-none" onClick={() => {
                            dispatch(actions.removeFromCart(props.data.id))
                        }} >Remove from Cart</button>

                    </div>
                </div>

            </div>
            
        </div>

    )
}
export default Product