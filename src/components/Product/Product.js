import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    
    const{name,img,seller,price,stock,star}=props.product;
    const element = <FontAwesomeIcon icon={faCartShopping} />
    return (
        <div className='product'>
            <div>
            <img src={img} alt=''></img>
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            <Rating 
            initialRating={star}
            className='gold' 
            emptySymbol="fa-regular fa-star"
                    fullSymbol="fa-solid fa-star">

            </Rating>
            
            <br></br>

            <button 
            onClick={()=>props.handleAddToCart(props.product)}
            className='btn-regular'>{element} add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;