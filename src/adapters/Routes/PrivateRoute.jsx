import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../Components/Header'
import ProductsContext from '../../context/ProductsProvider'

export const PrivateRoute = () => {

  const { token } = useContext(ProductsContext);
  const navigate = useNavigate();

 
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};