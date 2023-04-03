import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    
    let total= 0;
    let shipping= 0;
    for(const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const taxString = (total * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4 style={{textAlign:'center', fontWeight:'400', fontSize:'25px'}}>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total price: $ {total}</p>
                <p>Total shipping charge: ${shipping}</p>
                <p>Tax: $ {tax}</p>
                <h5 style={{fontSize:'21px', fontWeight:'400'}}>Grand total: $ {grandTotal}</h5>
        </div>
    );
};

export default Cart;