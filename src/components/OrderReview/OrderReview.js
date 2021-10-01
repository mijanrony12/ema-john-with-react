import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [ products ] = useProduct()
    const [ cart , setCart] = useCart(products)
    
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        removeFromDb(key)
        
    }
    return (
        <div className="shop-container">
                    <div className="shop">
                         {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={ product }
                        handleRemove={handleRemove}
                    >
                        
                        </ReviewItem>)
                          }
                     </div>
                    <div className="cart">
                                  <Cart cart={cart}></Cart>
                     </div>
           
        </div>
    );
};

export default OrderReview;