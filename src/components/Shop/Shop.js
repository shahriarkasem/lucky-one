import React, { useEffect, useState } from 'react';
import { Product } from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        }
        else{
            alert('You already selected this item once!!!');
        }
        
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                   products.map(product => <Product
                    key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart'>
                <h1>Selected items</h1>
                {
                    cart.map((item) => (
                        <h3 className='book-list' key={item.id}><img className='book-img' src={item.img} alt="" />{item.name}</h3>
                    ))
                }
                <br />
                <button className='choose-btn'><p className='cart-btn-txt'>CHOOSE 1 FOR ME</p></button>
                <br />
                <button className='choose-btn'><p           className='cart-btn-txt'>CHOOSE AGAIN</p></   button>
                </div>
            </div>
        </div>
    );
};

export {Shop};