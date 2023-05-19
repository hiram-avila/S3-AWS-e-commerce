import {useState} from 'react'
import { createContext } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [active, setActive] = useState(false)
    const [total, setTotal] = useState(0)
    
    
    const addCart = (producto) => {
        setCarrito([...carrito, producto])
        setTotal(total + parseFloat(producto.price ))
        setActive(true)
        console.log(total)

        setTimeout(() => {
            setActive(false)
        }, 2000);
        
    }

    return(
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                addCart,
                active,
                total
            }}
        >

            {children}
        </CartContext.Provider>
    )
}

export {
    CartProvider
}

export default CartContext
