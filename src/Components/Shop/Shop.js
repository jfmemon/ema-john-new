import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { useLoaderData } from 'react-router-dom';
const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handlerAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;