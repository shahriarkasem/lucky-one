import React, { useEffect, useState } from 'react';
import { Cart } from '../Cart/Cart';
import { Product } from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('https://shahriarkasem.github.io/api-repo/products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products.map(product => <Product
                    key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export {Shop};