import React from 'react'
import { useSelector } from 'react-redux'
const Informacion = () => {

    //la funcion useSelector sirve para consumir el estado de la funcion
    const estado=useSelector((state)=>{
        return state;
    })

    console.log(estado);

    return (
        <div>
            Cartera actual:<strong>{estado.balance.balance}</strong>
            
            <br/>
            Último mensaje:<strong>{estado.balance.mensaje}</strong>
        </div>
    )
}

export default Informacion
