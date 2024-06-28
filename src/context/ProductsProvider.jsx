import {useState, useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios';
import { useForm } from '../Hooks/useForm';
import products from '../utils/constants/products';

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const productosList = products;
    const [productos, setProducts] = useState(productosList);
    const [mostrar, setMostrar] = useState(false)

    const form = useForm()

                          // ?obteniendo productos de la api
        useEffect(() => {
            const fetchProducts = async () => {
              try{
                  const {data} = await axios("https://fakestoreapi.com/products");

                  const newData2 = data.filter(dat => dat.category != 'jewelery' && dat.price != '56.99' )

                const newData = newData2.map( products => {
                  return{
                    id:products.id,
                    title: products.title,
                    price: products.price,
                    category:products.category,
                    image:products.image
                  }
                })

                  setMostrar(true)
                  setProducts(newData);
                }
                catch (error){
                  console.log(error)
                }
            }
      
          fetchProducts();
        }, []);

          

    return(
        <ProductsContext.Provider
            value={{
              productos,
              mostrar,
              form
            }}
        >
            {children}  
        </ProductsContext.Provider>
    )

  
}

export{
    ProductsProvider
}

export default ProductsContext