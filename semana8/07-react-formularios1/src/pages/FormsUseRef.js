import React, { useRef } from "react";
/**
 *
 * En este componente aprendremos a controlar formularios con un nuevo hook llamado useRef();
 * useRef, sirve para referenciar y/o controlar a cualquier elemento HTML.
 * funciona como un getElementById
 */
const FormsUseRef = () => {
  const miH1 = useRef();
  const inputNombreRef = useRef();
  const inputEmailRef = useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputNombreRef.current.value);
        console.log(inputEmailRef.current.value);
    };

  console.log(miH1.current);

  return (
    <>
      <h1 className="display-4" ref={miH1}>
        Usando useRef
      </h1>

      <button
        onClick={() => {
          console.log(miH1.current);
          miH1.current.classList.add("text-danger");
        }}
      >
        Cambiar color de titulo
      </button>

      <hr />

      <main className="container">
        <div className="row justify-content-center">
            
          <div className="col-5">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inputNombre">Nombres:</label>
                    <input type="text" id="inputNombre" className="form-control"
                    ref={inputNombreRef}
                    />


                    <label htmlFor="inputEmail">Email:</label>
                    <input type="email" id="inputEmail" className="form-control"
                    ref={inputEmailRef}
                    />

        <button className="btn btn-primary" type="submit">
        Guardar cambios
        </button>

                    
                </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FormsUseRef;
