import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    // console.log(cart)
    let name = '';
    let price = 0;
    for (const item of cart) {
        name = name + item.name + ','
        price = price + parseFloat(item.price)
    }
    return (
        <div className='cart'>
            <h3> Order Summary </h3>
            <h4> order Item : {cart.length} </h4>
            <h3>Gun name : {name}</h3>
            <p>Price : ${price}</p>
        </div>
    );
};

export default Cart;