import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product}) => {
    const {name, img, price} = product;

    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <h4>Price: {price}</h4>
            </div>
            <button className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export {Product};