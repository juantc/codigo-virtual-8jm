import React, {useState} from 'react'

const FormsOnChange2 = () => {

    const [formulario,setFormulario]=useState({
        nombre: 'Katia',
        email:''
    });

    const handleChange=(e)=>{
        //
        //setFormulario()
        let objTemporal={
            ...formulario,
            [e.target.name]: e.target.value
        };
    };



    const handleSubmit=(e)=>{
        e.preventDefault();


    };


    return (
        <div>
            <>
      <h1 className="display-4">
        Usando la función onChange
      </h1>

      

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
                    value={formulario.nombre}
                    onChange={handleChange}
                    name="nombre"
                    />

                <small>Caracteres {formulario.nombre.length}</small>
                <div>
                <label htmlFor="inputEmail">Email:</label>
                    <input type="email" id="inputEmail" className="form-control"
                    value={formulario.email}
                    onChange={handleChange}
                    name="email"
                    />

                </div>
                 

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
        </div>
    )
}

export default FormsOnChange2
