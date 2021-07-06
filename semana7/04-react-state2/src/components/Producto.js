import React from 'react';


const Producto =()=>{
    return(
        <div className="col-md-3">
      <div className="card">
        <img src={props.} alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">Titulo</h4>
          <p className="card-text">el contenido del producto</p>
        </div>
      </div>
    </div>
    )
}





export default Producto