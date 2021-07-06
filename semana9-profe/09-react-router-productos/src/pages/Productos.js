import React, { useState, useEffect } from "react";
import { getProductos } from "../services/productos";
import CardProducto from "../components/CardProducto";

const Productos = () => {
  const [productos,setProductos] = useState([]);
  const [cargando,setCargando] = useState(true);

  useEffect(() => {
    getProductos().then((response) => {
      setProductos(response.data);
	  setCargando(false);
      
    });
  },[]);

  return (
    <>
      <div className="row">
		  {cargando===true?(
			  <Cargando />
		  ):(
			productos.map((objProducto)=>{
				return <CardProducto objProducto={objProducto} key={objProducto.id}/>
			})
		  )}
        
        
      </div>
    </>
  );
};

export default Productos;
