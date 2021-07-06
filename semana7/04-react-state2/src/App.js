
import React from 'react'
import Producto from './components/Producto';
import {products} from './data/products';


const App = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5">Tienda app</h1>
          </div>
        </div>

        {/*Contenedor de los productos */}

        <div className="row">
          {
            products.map((objProducto,i)=>{
              return <Producto prod={objProducto} key={i}/>
            })
          }


        </div>
      </main>
    </>
  );
}

export default App;
