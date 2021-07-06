import React, { useEffect, useState } from "react";
import Categorias from "./components/Categorias";
import Header from "./components/Header";
import Productos from "./components/Productos";

import { getCategorias } from "./services/categorias";
import { getProductos } from "./services/productos";

const App = () => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [pagina, setPagina] = useState(1);
  const [contador, setContador] = useState(0);
  const [anterior, setAnterior]=useState(0);
  //const [cantidadTotal,setTotalProductos]=useState([]);
  const [totalProductos, setTotalProductos] = useState([]);

  const seleccionarCategoria = (id) => {
    setCategoriaSeleccionada(id);
  };

  useEffect(() => {
    getProductos(0).then((rpta) => {
      let cantidadTotal = rpta.data.length;
      setTotalProductos(cantidadTotal);
    });
  }, []);

  useEffect(() => {
    getCategorias().then((rpta) => {
      getProductos(pagina).then((rpta2) => {
        setCategorias(rpta.data);
        setProductos(rpta2.data);
      });
    });
    // const traerTodo = async () => {
    // 	let rpta1 = await getCategorias();
    // 	let rpta2 = await getProductos();
    // 	setCategorias(rpta1.data);
    // 	setProductos(rpta2.data);
    // };
    // traerTodo();
  }, [pagina]);

  const siguientePagina = () => {
    if (pagina === Math.ceil(totalProductos / 6)) {
      return;
    } else {
      setPagina(pagina + 1);
    }
  };


  const anteriorPagina = () => {
    if (pagina === 1) {
      return;
    } else {
      setPagina(pagina - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-12 text-end">

            <button
              className="btn btn-danger"
              onClick={() => {
                setContador(contador + 1);
              }}
            >
              Contador {contador}
            </button>



            <button
              className="btn btn-danger"
              onClick={() => {
                setAnterior(contador - 1);
              }}
            >
             Anterior {contador}
            </button>


            <button className="btn btn-primary" onClick={siguientePagina}>
              Ver pagina {pagina + 1}
            </button>
          </div>
          <div className="col-md-3">
            <Categorias
              categorias={categorias}
              seleccionarCategoria={seleccionarCategoria}
              categoriaSeleccionada={categoriaSeleccionada}
            />
          </div>
          <div className="col-md-9">
            <Productos
              productos={productos}
              categoriaSeleccionada={categoriaSeleccionada}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
