import React, {useState} from 'react'

const FormOnChange = () => {
    const [nombre,setNombre]=useState('Katia');
    const [email,setEmail]=useState('correo@gmail.com');


    const handleNombreChange=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let objInfo={
            nombre:nombre,
            email:email
        };
        console.log(objInfo);

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
                    value={nombre}
                    onChange={handleNombreChange}
                    />

                <small>Caracteres {nombre.length}</small>
                <div>
                <label htmlFor="inputEmail">Email:</label>
                    <input type="email" id="inputEmail" className="form-control"
                    value={email}
                    onChange={handleEmailChange}
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

export default FormOnChange
