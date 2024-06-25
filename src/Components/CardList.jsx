import {useEffect} from 'react'
import { useContext } from 'react';
import { HashLoader } from "react-spinners";



import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import Cargando from './Cargando';



const CardList = () => {

  const {productos} = useContext(ProductsContext)

  return (
    <div className=" absolute bg-white grid grid-cols-4 gap-3 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full overflow-hidden">
            {
                productos.length > 1? productos.map(product => (
                  <Card key={product.id} product={product} />
                ))
                :(
                    <>
                      <div className='fixed top-24 pt-1 left-0 right-0 bottom-0 flex items-center justify-center bg-white'>
                          <HashLoader color="#36d7b7" />
          
                      </div>
                    </>
                 )
            }
    </div>
    
  );
};

export default CardList