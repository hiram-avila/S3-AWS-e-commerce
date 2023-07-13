import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'
import ProductsContext from '../../context/ProductsProvider'

export const PrivateRoute = () => {

  const {} = useContext(ProductsContext)

  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}