import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Selected items</h1>
            <div className='cart-products'>
                 <p>one</p>
                 <p>one</p>
                 <p>one</p>
                 <p>one</p>
            </div>
            <br />
            <button className='choose-btn'><p className='cart-btn-txt'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button className='choose-btn'><p className='cart-btn-txt'>CHOOSE AGAIN</p></button>
        </div>
    );
};

export {Cart};