import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p style={{marginBottom:'35px'}}>Price: <span style={{fontWeight:'bold'}}>{price} $</span></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faCartPlus} style={{fontSize:'17px'}}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;