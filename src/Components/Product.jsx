
import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Magnifier } from "react-image-magnifiers";
import { HashLoader } from "react-spinners";



import ProductsContext from '../context/ProductsProvider'
import CartContext from '../context/CartProvider';
import Cargando from './Cargando';


const Product = () => {

    const { productos } = useContext(ProductsContext)
    const { addCart } = useContext(CartContext)
    const { id } = useParams()

    const [producto, setProducto] = useState(null)

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
        <div className="bg-gray-700  overflow-hidden text-lg md:text-xl lg:text-2xl xl:text-3xl overflow-x-hidden  ">

            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6  overflow-y-hidden">
                <div id="viewerButton" className=" w-full flex justify-center">

                </div>
                <div id="viewerBox" className="lg:p-14 md:p-6 p-2 flex justify-between bg-white">


                    <div className='flex justify-center items-center w-56'>
                        <Magnifier
                            imageSrc={producto.image}
                            imageAlt="Descripción de la imagen"
                            className="clase_para_la_imagen"
                        />
                    </div>

                    <div className="flex justify-end ">
                        <Link to='/inicio' className='text-blackite absolute left-28 mt-2 top-40 pt-6 hover:scale-125 transition duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                        </Link>

                    </div>
                    <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">

                        <div className="lg:w-1/2 flex flex-col justify-center mt-12 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">{producto.title}</h1>
                            <p className="text-base leading-normal text-gray-600 mt-2">You don't just want to be comfortable sitting in a bar stool—you want to be comfortable.</p>
                            <p className="text-3xl font-medium  mt-8 md:mt-10 text-indigo-600">${producto.price}</p>
                            <div className="flex  flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                                <button className=" rounded-lg border bg-indigo-600 text-base font-medium leading-none text-white uppercase p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  hover:bg-black hover:text-white">Comprar ahora</button>
                                <button onClick={()=>addCart(producto)} className=" rounded-lg border bg-yellow-500 text-base font-medium leading-none text-white uppercase p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  hover:bg-black hover:text-white">Add to Cart</button>
                            </div>
                            <div className="mt-6">
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
            <style>{`
        .slider {
            width: 200px;
            height: 400px;
            position: relative;
            overflow: hidden;
        }

        .slide-ana {
            height: 360px;
        }

        .slide-ana > div {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: all 0.7s;
        }

        @media (min-width: 200px) and (max-width: 639px) {
            .slider {
                height: 300px;
                width: 170px;
            }

            .magnifier-preview {
                transform: scale(1);
                transition: transform 0.25s ease-in-out;
              }
              
              .magnifier-preview:hover {
                transform: scale(1.5);
              }
              
                }
            }
        }
    `}</style>
        </div>
    )
}

export default Product