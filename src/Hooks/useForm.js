import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const useForm = () => {

    const initialState ={
        user:'',
        email:'',
        password:''
    }

    useEffect(() => {
      
        const currentUrl = window.location.pathname;
        console.log(currentUrl)
        if(currentUrl == '/login'){
            console.log('estamos en el login')
        }
        
      
    }, [])
    
  
    const [values, setValues] = useState(initialState)
    const [alerta, setAlerta] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
        console.log(value)
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            if(Object.values(values).includes('')){
                console.log('vacio')
                setAlerta({
                    msg:'los campos son obligatorios',
                    error: true
                })

                setTimeout(()=>{
                    setAlerta({})
                }, 2000)
                return
            }
                console.log('todo bien')
                console.log(values)
                registrar()

            setValues(initialState) 
      };

      const resetForm = () => {
        setValues(initialState);
      };

      const registrar = async() => {
        try {
            
            const {data} = await axios.post('http://localhost:4000/usuarios/registrar', values)
            console.log(data.token)
            localStorage.setItem('token', data.token);

            setAlerta({
                msg:data.msg,
                error: false
            })

            setTimeout(()=>{
                setAlerta({})
            }, 2000)

        } catch (error) {
            setAlerta({
                msg:error.response.data.msg,
                error:true
            })

            setTimeout(()=>{
                setAlerta({})
            }, 2000)
        }
      }


      return {
        values,
        handleChange,
        handleSubmit,
        resetForm,
        alerta
      
      };

}


