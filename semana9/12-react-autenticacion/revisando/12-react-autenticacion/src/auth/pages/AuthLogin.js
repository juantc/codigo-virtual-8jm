import React from "react";

const AuthLogin = () => {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <form>
                <div>
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Contraseña
                  </label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mt-3 text-end">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLogin;
