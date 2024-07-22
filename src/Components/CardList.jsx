import { useEffect } from 'react'
import { useContext } from 'react';
import { HashLoader } from "react-spinners";
import Image from 'next/image';

import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import Cargando from './Cargando';



const CardList = () => {

  const { productos } = useContext(ProductsContext)

  console.log(productos)

  return (
    <div className="relative">
      <div className="w-full h-64 relative">
        <Image
          src="https://assetspwa.liverpool.com.mx/assets/digital/home/img/jul24/samsung_GB100724.jpg"
          alt="Header"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 bg-white grid grid-cols-4 gap-3 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full overflow-hidden">
        {productos.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
};

export default CardList