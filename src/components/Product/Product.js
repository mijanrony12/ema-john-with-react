import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    
    const { name, price, img, seller, stock ,star} = props.product
    const icon = <FontAwesomeIcon icon={faShoppingCart } />
    return (
        <div className="product">
            <div className="img">
                     <img src={img} alt="item" />
            </div>
            <div className="details">
                <h4>{ name }</h4>
                <p>by:{ seller }</p>
                <p>${ price }</p>
                <p>only { stock } left in stock - order soon</p>
                <Rating
                    initialRating={star}
                 emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                />
                <br />
                <button onClick={ () => props.addToCart(props.product) }> <small>{ icon}</small> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;