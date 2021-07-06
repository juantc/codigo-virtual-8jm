import React from 'react'

const Categorias = ({categorias, seleccionarCategoria}) => { //también se hace con props
    return (
        
        <ul class="list-group">
            {
            categorias.map((cat)=>{

                let bgPrimary=+cat.id===+categoriaSeleccionada ? 'bg-primary':'';
                 //usar operador ternario
                return (
                <li
                className={`list-group-item ${bgPrimary}`}
                 key={cat.id}
                 onclick={()=>{
                     if(+categoriaSeleccionada===+cat.id){
                        seleccionarCategoria(null);
                     }else{
                        seleccionarCategoria(cat.id);
                     }
                 }}
                 
                 >
                    {cat.nombre}
                </li> //repar el uso cat.nombre
                );
            })}
        </ul>
    );
};

export default Categorias;
