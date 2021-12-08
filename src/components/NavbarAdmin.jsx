import React from "react";
import Logo from "../images/icono.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarAdmin = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sombra">
        <div className="container-fluid py-1 px-5 ">
          <NavLink className="navbar-brand" to="/servicio-list">
            <div className="d-flex align-items-center">
              <img alt="" src={Logo} height="30" className="pe-2" />
              <h4 className="m-0">
                <b>Pet Home Service</b>
              </h4>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/servicio-list"
                >
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link active" to="/usuario-list">
                  Usuarios
                </NavLink>
              </li>
            </ul>
            <NavLink className="ms-2 btn btn-danger px-3 p_white sombra" to="/" onClick={() => logout({ returnTo: window.location.origin })}>
              <b>Salir</b>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
