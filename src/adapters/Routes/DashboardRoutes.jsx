import React, { useContext } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import CardList from '../../Components/CardList'
import Carousel from '../../Components/Carousel'
import Carrito from '../../Components/Carrito'
import Error from '../../Components/Error'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import Product from '../../Components/Product'
import ProductsContext from '../../context/ProductsProvider'


const DashboardRoutes = () => {

  const { products, mostrar } = useContext(ProductsContext)


  return (
    <div className='overflow-x-hidden overflow-y-hidden'>

      <Outlet />

    </div>
  )
}

export default DashboardRoutes