import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img,key } = props.product;
    const {handleRemove}=props
    return (
        <div className="product">
            <div className="img">
                  <img src={img} alt="" />
             </div>
            <div  className="details">
                    <h4>Name: { name}</h4>
                    <h5>Price: { price}</h5>
                    <h6>quantity: { quantity }</h6>
                    <button onClick={()=>handleRemove(key)}>Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;