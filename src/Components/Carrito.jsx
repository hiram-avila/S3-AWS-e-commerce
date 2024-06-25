import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import CartContext from '../context/CartProvider'
import CardProduct from './CardProduct'

const Carrito = () => {

    const { setCarrito, carrito, total, setTotal } = useContext(CartContext)

    const limpiarCarrito = async() => {
        try {
            console.log('se intento eliminar el carrito')
            const token = localStorage.getItem('tokenn');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

           const {data} = await axios.delete('http://localhost:4000/carrito', config);
            console.log(data)
            // Actualizar el estado del carrito localmente para reflejar que está vacío
            setCarrito([]);
            setTotal(0)
        } catch (error) {
            console.error(error);
        }
    }



    let tax = total / 7.3;

    return (
        <div>


            <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-hidden overflow-x-hidden fixed sticky-0 pt-10 " id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-center" id="cart">
                        <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">

                            <span className="text-5xl font-black leading-10 text-gray-800 pt-1">Bag</span>
                            <span className=''>
                                <button onClick={limpiarCarrito} className='pl-80 underline text-red-600 font-semibold '>
                                    Limpiar carrito
                                </button>
                            </span>
                            {
                                carrito.length > 0 ?
                                    carrito.map(car => (
                                        <CardProduct car={car} key={car.id} />
                                    ))

                                    : <p className='flex items-center justify-center font-extrabold pt-20'>No hay productos en el carrito...</p>
                            }
                        </div>
                        <div className=" md:w-1/3 xl:w-1/4  bg-gray-100 h-full">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto relative">

                                <Link to='/inicio' className="text-sm pl-2 leading-none absolute top-3 right-4 hover:scale-125 transition duration-200">


                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="currentColor" className="stroke-3 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>


                                </Link>
                                <div className=''>

                                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800 font-bold">Productos</p>
                                        <p className="text-base leading-none text-gray-800">{carrito.length}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800 font-bold">Tax</p>
                                        <p className="text-base leading-none text-gray-800">${tax.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-4 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">${total.toFixed(2)}</p>
                                    </div>
                                    <button className="text-base leading-none w-full py-5 bg-yellow-500 hover:bg-yellow-600 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white font-semibold">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carrito