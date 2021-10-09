import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import  {useHistory} from 'react-router-dom'
const OrderReview = () => {
    const [ products ] = useProduct()
    const [ cart , setCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        removeFromDb(key)
        
    }
    const clickHandler = () => {
        // history.push('/shipping');
        // setCart([])
        // clearTheCart()
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
                                  <Cart cart={cart}>
                                                <Link to="/shipping">
                                                        <button onClick={clickHandler} className="btn-color">proceed to Order Place</button>
                                                </Link>
                                  </Cart>
                     </div>
           
        </div>
    );
};

export default OrderReview;