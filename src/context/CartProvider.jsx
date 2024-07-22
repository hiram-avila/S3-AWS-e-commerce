import { useState,createContext, useEffect } from 'react'
import axios from 'axios'


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    console.log(total)



    const addCart = async(producto) => {
        console.log(carrito)

        const productoExistente = carrito.find((prod) => prod.id === producto.id);
        const token = localStorage.getItem('tokenn')

        if (productoExistente) {
            console.log('ya esta ')
            return
        } 
            setCarrito([...carrito, producto])
            setTotal(total + parseFloat(producto.price))
        
        const config = {
            headers: {
              "Content-Type": "application/json",   
              Authorization: `Bearer ${token}`
            }
          }
       

    }

    const removeFromCart = (productId) => {
        const productoEliminado = carrito.find((producto) => producto.id === productId);
        if (productoEliminado) {
            const updatedCart = carrito.filter((producto) => producto.id !== productId);
            setCarrito(updatedCart);
            setTotal(total - parseFloat(productoEliminado.price));
        }
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                addCart,
                total,
                setTotal,
                removeFromCart
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
