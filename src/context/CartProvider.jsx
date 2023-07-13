import {useState} from 'react'
import { createContext } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    
    
    const addCart = (producto) => {

        const productoExistente = carrito.find((p) => p.id === producto.id);

        if(productoExistente){
            console.log('ya esta ')
        }else{
              setCarrito([...carrito, producto])
              setTotal(total + parseFloat(producto.price ))
              
            }

    }    


    return(
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                addCart,
                total,
                setTotal
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
