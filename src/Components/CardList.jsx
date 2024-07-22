import { useContext } from 'react';
import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import samsung from './../assets/products/samsung.webp';
 


const CardList = () => {
  const { productos } = useContext(ProductsContext);

  return (
    <div className="relative">
      {/* Header Image */}
      <div className="relative w-full h-90 flex justify-center mt-2"> {/* Ajusta h-80 según sea necesario */}
        <img
          src={samsung}
          alt="Header"
          style={{
            width: '90%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Product List */}
      <div className="absolute top-0 left-0 bg-white grid grid-cols-4 gap-3 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full overflow-hidden mt-80"> {/* Ajusta mt-80 según sea necesario */}
        {productos.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;