import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Logo from "../images/icono.png";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="vista-total d-flex justify-content-center align-items-center">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return isAuthenticated ? (
    <> {children} </>
  ) : (
    <div className="vista-total d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-center">
          <img alt="" src={Logo} height="50" className="mb-2"/>
        </div>
        <span>
          <b>No tiene permiso para visitar esta página</b>
        </span>
        <NavLink className="m-auto" to="/">
          Volver a la página de Inicio
        </NavLink>
      </div>
    </div>
  );
};

export default PrivateRoute;
