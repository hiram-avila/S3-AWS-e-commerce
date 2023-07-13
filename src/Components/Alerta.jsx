import React from 'react'

const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-white to-red-600 rounded-2xl' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center p-3 rounded-2xl uppercase text-white font-bold text-sm my-10`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta