import {useState, useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios';

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [productos, setProducts] = useState([]);
    const [mostrar, setMostrar] = useState(false)

  

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
              mostrar
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