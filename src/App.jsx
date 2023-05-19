import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Components/Inicio'
import PublicRoute from './adapters/Routes/PublicRoute'
import PrivateRoute from './adapters/Routes/PrivateRoute'
import LoginScreen from './Components/LoginScreen'
import DashboardRoutes from './adapters/Routes/DashboardRoutes'
import { ProductsProvider } from './context/ProductsProvider'
import { CartProvider } from './context/CartProvider'
import Carrito from './Components/Carrito'

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <ProductsProvider>
          <Routes>

              <Route path="/login" element={
                <PublicRoute>
                  <LoginScreen />
                </PublicRoute>
              }
              />

              <Route path="/*" element={
                <PrivateRoute>
                  <DashboardRoutes />
                </PrivateRoute>
              }
              />

          </Routes>
        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
