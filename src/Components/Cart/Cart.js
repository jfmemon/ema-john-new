import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4 style={{textAlign:'center', fontWeight:'400', fontSize:'25px'}}>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total price: </p>
                <p>Total shipping charge: ${cart.shipping}</p>
                <p>Tax: </p>
                <h5 style={{fontSize:'21px', fontWeight:'400'}}>Grand total: </h5>
        </div>
    );
};

export default Cart;