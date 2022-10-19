import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleReviewItem}) => {
    const {id, name, img, price, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className="order-review-details">
                <div className="order-review">
                    <p>{name}</p>
                    <p><small>Price:${price}</small></p>
                    <p><small>Shipping:${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete">
                    <button onClick={()=> handleReviewItem(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;