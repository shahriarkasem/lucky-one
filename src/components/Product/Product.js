import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {id, name, img, price} = product;

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <h4>Price: {price}</h4>
            </div>
            <button className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export {Product};