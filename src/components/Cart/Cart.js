import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
    const { cart } = props;
    console.log(props);
    const { length } = props.cart
    // const reducer = (previous, current) => previous + current.price;
    // const total=cart.reduce(reducer,0)
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart)
    {
        if (!product.quantity)
        {
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
               <h1>Order Summary</h1>
            <h6>Items Ordered:-{ totalQuantity}</h6>
            <p>Total:-{ total.toFixed(2) }</p>
            <p>Shipping :-{ shipping.toFixed(2) }</p>
            <p>tax:-{ tax.toFixed(2)}</p>
            <h6>GrandTotal:-{ grandTotal.toFixed(2) }</h6>
            <p>{ props.children}</p>
        </div>
    );
};

export default Cart;