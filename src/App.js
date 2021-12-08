import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./estilos_victor.css";
import Portada from "./pages/usuario/portada";
import Servicios from "./pages/usuario/servicios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateUsuario from "./components/create-usuario.component";
import EditUsuario from "./components/edit-usuario.component";
import UsuarioList from "./components/usuario-list.component";

import CreateServicio from "./components/create-servicio.component";
import EditServicio from "./components/edit-servicio.component";
import ServicioList from "./components/servicio-list.component";

import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";
import Equipo from "./pages/usuario/equipo";

function App() {
  return (
    <Router>
      <Auth0Provider
        domain="dev-u63rgqbo.us.auth0.com"
        clientId="I9Hgk0BOXPDL5AmiXyR6E5TKL7VKiYe4"
        redirectUri="http://localhost:3000/servicio-list"
      >
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Portada />
            </Route>
            <Route path="/servicios">
              <Servicios />
            </Route>
            <Route path="/equipo">
              <Equipo />
            </Route>
            <PrivateRoute>
              <Route path="/create-usuario" component={CreateUsuario} />
              <Route path="/edit-usuario/:id" component={EditUsuario} />
              <Route path="/usuario-list" component={UsuarioList} />
              <Route path="/create-servicio" component={CreateServicio} />
              <Route path="/edit-servicio/:id" component={EditServicio} />
              <Route path="/servicio-list" component={ServicioList} />
            </PrivateRoute>
          </Switch>
        </div>
      </Auth0Provider>
    </Router>
  );
}

export default App;
