import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gun from '../Gun/Gun';
import './Guns.css'

const Guns = () => {
    const [guns, setGuns] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    const handleToCart = (gun) => {
        const newCart = [...cart, gun]
        setCart(newCart)
    }
    return (
        <div className='main-container'>
            <div className="guns-container">
                {
                    guns.map(gun => <Gun
                        gun={gun}
                        key={gun.id}
                        handleToCart={handleToCart}
                    ></Gun>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Guns;