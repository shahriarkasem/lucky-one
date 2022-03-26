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
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        }
        else{
            alert('You already selected this item once!!!');
        }
    }
    const chooseOneItem = () => {
        const length = Math.floor(Math.random() * cart.length);;
        const newItem = [cart[length]];
        setCart(newItem);
    }
    const chooseAgain = () => {
      let newCart = [];
      setCart(newCart);
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
                <button className='choose-btn' onClick={() => chooseOneItem()}><p className='cart-btn-txt'>CHOOSE 1 FOR ME</p></button>
                <br />
                <button className='choose-btn' onClick={() => chooseAgain()}><p className='cart-btn-txt'>CHOOSE AGAIN</p></   button>
                </div>
            </div>
        </div>
    );
};

export {Shop};