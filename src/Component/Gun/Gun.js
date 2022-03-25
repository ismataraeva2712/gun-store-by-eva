import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Gun.css'

const Gun = (props) => {
    const { gun, handleToCart } = props
    // console.log(props)
    const { name, img, bullet, capacity, action, price, category } = gun
    return (
        <div className='gun'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Category : {category}</h5>
            <h5>price : ${price}</h5>
            <p>Bullet : {bullet}</p>
            <p>capacity : {capacity}</p>
            <p>Action : {action}</p>

            <button onClick={() => handleToCart(gun)} className='btn'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></p>

            </button>

        </div>
    );
};

export default Gun;