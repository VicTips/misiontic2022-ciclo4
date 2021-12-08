import React from "react";
import Logo from "../images/icono.png";
import { NavLink } from "react-router-dom";
import ModalContacto from "./modales/Contactenos";
import ModalEquipo from "./modales/Equipo";
import ModalOfertas from "./modales/Ofertas";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const NavbarUser = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sombra">
        <div className="container-fluid py-1 px-5 ">
          <NavLink className="navbar-brand" to="/">
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link active" to="/servicios">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link cursor active">
                  <ModalOfertas />
                </div>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link active" to="/equipo">
                  Conócenos
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link cursor active">
                  <ModalContacto />
                </div>
              </li>
            </ul>
            <div className="ms-2" onClick={() => loginWithRedirect()}>
              <NavLink className="ms-2 btn btn-info sombra" to="/servicio-list">
                <b>Ingresar</b>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarUser;
