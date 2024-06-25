import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import CartContext from '../context/CartProvider'
import CardProduct from './CardProduct'

const Carrito = () => {

    const { setCarrito, carrito, total, setTotal } = useContext(CartContext)

  


    let tax = total / 7.3;

    return (
        <div>



        </div>
    )
}

export default Carrito