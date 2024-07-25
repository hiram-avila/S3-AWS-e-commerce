import { useEffect, useContext } from 'react';
import ProductsContext from '../context/ProductsProvider';
import Card from './Card';
import samsung from './../assets/products/samsung.webp';

const CardList = () => {
  const { productos } = useContext(ProductsContext);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = samsung;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative no-caret">
      <div className="relative w-full h-90 flex justify-center mt-2">
        <img
          src={samsung}
          alt="phone"
          style={{
            width: '80%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div className="absolute top-0 left-0 no-caret bg-white grid grid-cols-4 gap-3 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full overflow-hidden mt-80">
        {productos.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
