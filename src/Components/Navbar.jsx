import {useEffect} from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'


const Navbar = () => {

    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)

    const params = useParams()

    const validarParams = () => {
        if(Object.values(params).includes('inicio/carrito')) {
        setActive(true)
       }
       else{
        setActive(false)
       }
    }
    
    useEffect(() => {
     validarParams()
      
    }, [params])
    
    
   
  return (
    <nav className="flex items-center justify-between bg-bg-nav text-xl text-gray-50 font-serif py-3 px-8  z-10 w-full ">
      <div></div>

        <div className="flex items-center justify-center">
          <input 
              type="search" 
              className="w-64 px-5 py-1 text-sm text-black bg-white rounded-2xl focus:outline-none flex-grow" 
              placeholder={active ? 'Buscar en el carrito' : 'Buscar'} 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          {
            params &&(
            <Link to="/inicio/carrito" className="flex items-center flex-shrink">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">

                  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="ml-2"></span>
            </Link>
            )
          }
        </div>


    </nav>
  )
}

export default Navbar