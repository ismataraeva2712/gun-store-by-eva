import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>GuN-StoRe</h1>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
                <a href="/shops">Shops</a>
            </div>
        </div>
    );
};

export default Header;