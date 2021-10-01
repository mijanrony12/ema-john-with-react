import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [ products, setProducts ] = useState([])
    const [displayProduct, setDisplayProduct]=useState([])
    const [cart, setCart]=useState([])
    useEffect(() => {
       
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
               setDisplayProduct(data)
            })
      
    }, [])

    useEffect(() => {
      
        if (products.length)
        {
            const getData = getStoredCart()
      
            let storeData=[]
        for (const key in getData)
        {
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct)
            {
                const quantity = getData[ key ]
                addedProduct.quantity = quantity;
               storeData.push(addedProduct)
           }
            
            }
            setCart(storeData)
       }
    }, [products])

    const addToCart = product => {
        const newCount = [ ...cart, product ];
        setCart(newCount);
       // add to localstorage
        addToDb(product.key)
    }

    const searchHandle = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchProduct)
    }
    return (
        <div>
              <div className="search-container">
                <div className="search">
                     <input  onChange={searchHandle} type="text" placeholder="Search Your Item" />
                   </div>
        </div>
        <div className="shop-container">
            <div className="shop">
                <h1>Total product: { products.length }</h1>
                {
                    displayProduct.map(product => <Product
                        key={product.key}
                        product={ product }
                        addToCart={addToCart}
                    ></Product>)
                }
           </div>
            <div className="cart">
               <Cart cart={cart}></Cart>
           </div>
        </div>
      </div>
    );
};

export default Shop;