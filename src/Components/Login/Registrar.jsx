import React, { useContext } from 'react'
import ProductsContext from '../../context/ProductsProvider'
import Alerta from '../Alerta'

const Registrar = () => {


    const {form} = useContext(ProductsContext)

    const {handleChange, handleSubmit, resetForm, values, alerta} = form
    const {msg} = alerta

    return (
        <div className="flex h-screen flex-col  px-6 py-12 lg:px-8 bg-bgLogin">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Registre una cuenta</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
        {msg && <Alerta alerta={alerta}/>}

                        <label htmlFor="user" className="block text-sm font-medium leading-6 text-white">User</label>
                        <div className="mt-2">
                            <input 
                                onChange={handleChange} 
                                id="text" value={values.user} 
                                placeholder=' ej. Osvaldo_18'
                                name="user" type="text"
                                autoComplete='off'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email </label>

                        <div className="mt-2">
                            <input id="email"
                                onChange={handleChange}
                                value={values.email} 
                                name="email" placeholder=' Osvaldo18@gmail.com' 
                                type="email"  
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                             />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                        <div className="mt-2">
                            <input id="password"
                                   name="password" 
                                   onChange={handleChange} 
                                   value={values.password} 
                                   placeholder='' 
                                   type="password" 
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            />
                        </div>
                    </div>



                    <div>
                        <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrar</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Registrar