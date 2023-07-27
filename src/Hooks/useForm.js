import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export const useForm = () => {

    const initialState = {
        user: '',
        email: '',
        password: ''
    }

    const [values, setValues] = useState(initialState)
    const [alerta, setAlerta] = useState({})
    const [token, setToken] = useState('')

    const navigate = useNavigate()

    const currentUrl = window.location.pathname;

    console.log(token)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(values).includes('')) {
            console.log('vacio')
            setAlerta({
                msg: 'los campos son obligatorios',
                error: true
            })

            setTimeout(() => {
                setAlerta({})
            }, 2000)
            return
        }
        if (currentUrl == '/registrar') {
            console.log('estamos en la ruta registrar')
            registrar()
        } else {
            login()
        }

        setValues(initialState)
    };

    const resetForm = () => {
        setValues(initialState);
    };

    const registrar = async () => {
        try {

            const { data } = await axios.post('http://localhost:4000/usuarios/registrar', values)

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
            }, 2000)

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

            setTimeout(() => {
                setAlerta({})
            }, 2000)
        }
    }

    const login = async () => {


        try {
            const { data } = await axios.post('http://localhost:4000/usuarios/login', values);
            console.log(data);
            setAlerta({});
            navigate('/inicio');
            setToken(data.token);
            localStorage.setItem('tokenn', data.token);
        } catch (error) {

            setAlerta({
                msg: 'error',
                error: true
            })
        }
    }


    return {
        values,
        handleChange,
        handleSubmit,
        resetForm,
        alerta,
        token

    };

}


