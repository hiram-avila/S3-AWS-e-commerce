import React from 'react'
import { useContext } from 'react';
import { HashLoader } from "react-spinners";



import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import Cargando from './Cargando';



const CardList = () => {

  const {productos} = useContext(ProductsContext)


  return (
    <div className=" absolute bg-customColor grid grid-cols-4 gap-7 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full overflow-hidden">
            {
        
                productos.length > 1? productos.map(product => (
                  <Card key={product.id} product={product} />
                ))
                :(
                  <>
                  <div className='flex items-center justify-center h-screen w-screen'>
                      <HashLoader color="#36d7b7" />
      
                  </div>
                  
                  </>
              )
            }
    </div>
    
  );
};

export default CardList