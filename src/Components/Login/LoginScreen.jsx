import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductsContext from '../../context/ProductsProvider'
import Alerta from '../Alerta'



const LoginScreen = () => {

  const {form} = useContext(ProductsContext)
  const {handleChange, handleSubmit, resetForm, values, alerta} = form
  const {msg} = alerta



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    return (
        <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-bgLogin">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
         {msg && <Alerta alerta={alerta}/>}

            <div>
              <div className="mt-2">
                <input 
                  id="email"
                   name="email"
                   type="email" 
                   onChange={handleChange}
                   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-bold text-indigo-500 hover:text-indigo-500">¿olvidaste tu contraseña?</a>
                </div>
              </div>
              <div className="mt-2">
                <input
                   id="password"
                    name="password" 
                    type="password" 
                    onChange={handleChange}
                     required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
      
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
      
          <p className="mt-10 text-center text-sm text-white">
            
            <Link to="/registrar" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">¿No tienes cuenta?</Link>
          </p>
        </div>
      </div>

    )
}

export default LoginScreen