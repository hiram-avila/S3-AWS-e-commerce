import React, { useContext } from 'react'
import  { Route, Routes } from 'react-router-dom'

import CardList from '../../Components/CardList'
import Carousel from '../../Components/Carousel'
import Carrito from '../../Components/Carrito'
import Error from '../../Components/Error'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import LoginScreen from '../../Components/LoginScreen'
import Navbar from '../../Components/Navbar'
import Product from '../../Components/Product'
import ProductsContext from '../../context/ProductsProvider'


const DashboardRoutes = () => {

  const {products, mostrar} = useContext(ProductsContext)


  return (
    <div className=''>
        <Header />

        
        <Routes>
          <Route path='/inicio' element={<CardList/>}/>
          <Route path='inicio/carrito' element={<Carrito/>}/>
          <Route path='inicio/product/:id' element={<Product/>}/>
          
          <Route path='inicio/login' element={<LoginScreen/>}/>
          <Route path='inicio/carrito' element={<Carrito/>}/>

          <Route path='/*' component={<Error />}/>

        </Routes>


    </div>
  )
}

export default DashboardRoutes