import { useContext } from 'react';
import { useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import CartContext, { CartProvider } from '../context/CartProvider';
import Carousel from './Carousel';


const Header = () => {

    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/login')
        localStorage.removeItem('tokenn');
    }

    return (

        <div className="dark:bg-gray-600">
        <div>
          <div className="relative">
            <div className="dark:bg-gray-900 bg-gray-50 px-6 py-6">
              <div className="container mx-auto flex items-center justify-between">
                <Link to='/inicio' className="text-xl font-bold text-center text-gray-800 py-2 bg-amber-400 p-1 rounded-lg shadow-lg" aria-label="the Crib.">
                  REACT
                </Link>
                <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                  <li>
                    <Link to='/inicio' className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact' className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to='/support' className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Support
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="dark:text-amber-400 text-base font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                      aria-label="Log out"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
                <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                  <div className='flex justify-between'>
                    <div className="hidden lg:flex items-center">
                      <input type='text' aria-label="search items" className="rounded-tl-xl rounded-bl-xl text-black dark:hover:text-black dark:text-white focus:outline-none focus:ring-2 focus:text-black p-1" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-8 bg-amber-400 mt-1 mb-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                    <Link to='inicio/carrito' aria-label="go to cart" className="text-gray-800 p-3 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 pl-6">
                      <p className='absolute pl-5 mb-1 ml-2 pb-1 font-mono text-white'></p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex lg:hidden">
                    <button aria-label="open menu" className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                      <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};




export default Header