import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardRoutes from './adapters/Routes/DashboardRoutes'
import PublicRoute from './adapters/Routes/PublicRoute'
import Login from './adapters/Routes/Login'
import { ProductsProvider } from './context/ProductsProvider'
import { CartProvider } from './context/CartProvider'
import Carrito from './Components/Carrito'
import Registrar from './Components/Login/Registrar'
import { PrivateRoute } from './adapters/Routes/PrivateRoute'
import LoginScreen from './Components/Login/LoginScreen'
import Error from './Components/Error'
import CardList from './Components/CardList'
import Product from './Components/Product'
import Contact from './Components/Contact'

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <ProductsProvider>

          <Routes>
              <Route element={<PrivateRoute />}>
                  <Route path='/inicio' element={<CardList />} />
                  <Route path='inicio/carrito' element={<Carrito />} />
                  <Route path='inicio/product/:id' element={<Product />} />
                  <Route path='inicio/carrito' element={<Carrito />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/support' element={<Contact />} />
              </Route>

              <Route element={<DashboardRoutes />}>
                  <Route path='/login' element={<LoginScreen />} />
                  <Route path='/registrar' element={<Registrar />} />
              </Route>

              <Route path='*' element={<Error />}/>
          </Routes>


        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
