import { useEffect } from 'react'
import { useContext } from 'react';
import { HashLoader } from "react-spinners";



import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import Cargando from './Cargando';



const CardList = () => {

  const { productos } = useContext(ProductsContext)

  console.log(productos)

  return (
    <div className=" absolute bg-white grid grid-cols-4 gap-3 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full overflow-hidden">
      <div>
        {productos.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>

    </div>

  );
};

export default CardList