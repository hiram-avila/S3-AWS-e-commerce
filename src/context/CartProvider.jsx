import { useState,createContext, useEffect } from 'react'
import axios from 'axios'


const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(1)
    console.log(total)

    useEffect(() => {
        obtenerProductos()
    }, [])

    const obtenerProductos = async() => {
        try {
            
            const token = localStorage.getItem('tokenn')
    
            const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
                }
              }
            const {data} = await axios('http://localhost:4000/carrito', config)
            setCarrito( data.productos)
            

            console.log(data.productos)
        } catch (error) {
            console.error(error);
            
        }
    }
    


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
        try {
            const {data} = await axios.post('http://localhost:4000/carrito',producto, config );
            console.log(data);
            console.log(carrito);
            // Acciones adicionales después de guardar en el backend
          } catch (error) {
            console.error(error);
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
