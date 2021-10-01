import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products => {
    const [ cart, setCart ] = useState([])
    
    useEffect(() => {
        if (products.length)
        {
            const getdata = getStoredCart();
            let storeData = []
            for (const key in getdata)
            {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct)
                {
                    const quantity = getdata[ key ];
                    addedProduct.quantity = quantity;
                    storeData.push(addedProduct)
                }
            }
            setCart(storeData)
        }
    }, [products])
    return [cart, setCart]
}
export default useCart;