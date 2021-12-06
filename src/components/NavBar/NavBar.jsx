import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logoCharris from "../../assets/images/logo-lascharris.png";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <nav className="navbar-container navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logoCharris}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo LASCHARRIS"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/category"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/category">
                      Todos los productos
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Pañuelos">
                      Pañuelos
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/category/Scrunchies">
                      Scrunchies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/Perfuminas">
                      Perfuminas
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Comunidad
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/we">
                      Nosotras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/you">
                      Ustedes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shipping">
                  Envios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/payment">
                  Medios de pago
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contactanos
                </Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
      {/* <div className="nav">
        <Link className="nombre" to="/">
          Example
        </Link>
        <div className="caja">
          <Link to="/category/tomos-pares">Tomos pares</Link>
          <Link to="/">Catálogo</Link>
          <Link to="/cart">
            <Icon />
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default NavBar;
