
import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Magnifier } from "react-image-magnifiers";
import { HashLoader } from "react-spinners";



import ProductsContext from '../context/ProductsProvider'
import CartContext from '../context/CartProvider';
import Cargando from './Cargando';
import products from '../utils/constants/products';


const Product = () => {

    const { addCart } = useContext(CartContext)
    const { id } = useParams()
    const producto = products;


    useEffect(() => {
        const obtenerProducto = () => {
            const producto = productos.find(prod => prod.id == id)
            setProducto(producto)
        }
        obtenerProducto()
    }, [productos, id])

    if (!producto) {
        return (
            <>
            <div className='flex items-center justify-center h-screen'>
                <HashLoader color="#36d7b7" />

            </div>
            
            </>
        )
    }


    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div id="viewerBox" className="lg:p-8 md:p-6 p-4 flex flex-col lg:flex-row items-center">
          <div className='flex justify-center items-center w-full lg:w-1/2 p-2'>
            <Magnifier
              imageSrc={producto.image}
              imageAlt="Descripción de la imagen"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex justify-end w-full absolute top-4 left-4">
            <Link to='/inicio' className='text-black hover:scale-125 transition duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </Link>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col lg:w-1/2 p-4">
            <h1 className="text-3xl font-semibold text-gray-800">{producto.title}</h1>
            <p className="text-sm leading-normal text-gray-600 mt-2">You don't just want to be comfortable sitting in a bar stool—you want to be comfortable.</p>
            <p className="text-2xl font-medium text-indigo-600 mt-6">${producto.price}</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 mt-6">
              <button className="rounded-lg border bg-indigo-600 text-sm font-medium leading-none text-white uppercase p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700">Comprar ahora</button>
              <button onClick={() => addCart(producto)} className="rounded-lg border bg-yellow-500 text-sm font-medium leading-none text-white uppercase p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:bg-yellow-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Product