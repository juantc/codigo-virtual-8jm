import React, { useState } from "react";
let cursos = [
  { id: 1, nombre: "Algoritmos" },
  { id: 2, nombre: "Bases De Datos" },
  { id: 3, nombre: "Diseño de Interfaces" },
];

let cursosState = cursos.map((curso) => {
  return {
    ...curso,
    seleccionado: false,
    name: curso.nombre.toLowerCase().split(" ").join(""),
  };
});


const FormsOnChange4 = () => {
  const [checkboxes, setCheckboxes] = useState(cursosState);

  const handleChange = (e) => {
    let copiaChecks = [...checkboxes];
    let posicion=copiaChecks
  };

  const handleSubmit=(e)=>{
      e.preventDefault();

      let arregloFinal=checkboxes.map((curso)=>{
          return{
              id: curso.id,
              nombre: curso.nombre,
              checked: curso.seleccionado
          };
      });
      console.log(arregloFinal);

  };
  return (
    <>
      <h1 className="display-4">Mostrasndo checkboxes desde un arreglo</h1>
      <hr />
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-5">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {checkboxes.map((curso) => {
                    return (
                      <p>
                        <label htmlFor="">{curso.name}</label>
                        <input
                          type="checkbox"
                          checked={curso.seleccionado}
                          name={curso.name}
                          id=""
                        />
                      </p>
                    );
                  })}

                  <button className="btn btn-primary" type="submit">
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default FormsOnChange4;
