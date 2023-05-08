import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleDeleteCardData = id => {
        const remainingData = cart.filter(product => product.id !== id);
        setCart(remainingData);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleDeleteCardData={handleDeleteCardData}
                    ></ReviewItem>)
                }

                {
                    cart.length === 0 && <h3>There have no products available. <Link to={'/'}>Show more</Link> </h3>
                }
            </div>

            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;