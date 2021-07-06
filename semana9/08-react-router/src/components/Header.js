import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="!#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/nosotros" className="nav-link">
                            Nosotros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portafolio" className="nav-link">
                            Portafolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-link">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header
