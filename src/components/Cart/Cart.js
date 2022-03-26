import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart.name)
    const {name, img} = props.cart;

    return (
        <div className='cart'>
            <h1>Selected items</h1>
            <div className='cart-products'>
                 <div className="product-div">
                     <h4>{name}</h4>
                 </div>
            </div>
            <br />
            <button className='choose-btn'><p className='cart-btn-txt'>CHOOSE 1 FOR ME</p></button>
            <br />
            <button className='choose-btn'><p className='cart-btn-txt'>CHOOSE AGAIN</p></button>
        </div>
    );
};

export {Cart};