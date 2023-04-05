import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product, handleDeleteCardData}) => {
    const {id, name, price, quantity, img, shipping} = product; 
    console.log(product);
    return (
        <div className='review-item'>
            <div className='reviewImage'>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: ${quantity}</small></p>
                    <p><small>Shipping charge: ${shipping}</small></p>
                </div>
                <div className='review-delete'>
                    <button onClick={() => handleDeleteCardData(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;