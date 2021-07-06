import React,  {useState,useEffect} from 'react'

const Usuarios =()=>{
    const [usuarios,setUsuarios]=useState([]);

    useEffect(()=>{
        console.log("Inicio del useEffect");


        fetch(`http://reqres.in/api/users`)
        .then(response)=>{
            return response.json();

        }).then


        
    }


    return(
        <div>
            <ul>
                {
                    usuarios.map(objUsuario)=>{
                        return <li key={objUsuario.id}>{objUsuario.first_name}</li>
                        })
                    }  
                }

            </ul>
        </div>
    )
}

export default Usuarios