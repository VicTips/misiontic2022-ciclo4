import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateUsuario extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeUsuarioNombre = this.onChangeUsuarioNombre.bind(this);
    this.onChangeUsuarioRol = this.onChangeUsuarioRol.bind(this);
    this.onChangeUsuarioLogin = this.onChangeUsuarioLogin.bind(this);
    this.onChangeUsuarioContacto = this.onChangeUsuarioContacto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nombre: "",
      rol: "",
      login: "",
      contacto: "",
    };
  }

  onChangeUsuarioNombre(e) {
    this.setState({ nombre: e.target.value });
  }

  onChangeUsuarioRol(e) {
    this.setState({ rol: e.target.value });
  }

  onChangeUsuarioLogin(e) {
    this.setState({ login: e.target.value });
  }

  onChangeUsuarioContacto(e) {
    this.setState({ contacto: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const UsuarioObject = {
      nombre: this.state.nombre,
      rol: this.state.rol,
      login: this.state.login,
      contacto: this.state.contacto,
    };

    axios
      .post("http://localhost:4000/Usuarios/create-usuario", UsuarioObject)
      .then((res) => console.log(res.data));

    this.setState({
      nombre: "",
      rol: "",
      login: "",
      contacto: "",
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={this.state.nombre}
              onChange={this.onChangeUsuarioNombre}
            />
          </Form.Group>

          <Form.Group controlId="Rol">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              type="rol"
              value={this.state.rol}
              onChange={this.onChangeUsuarioRol}
            />
          </Form.Group>

          <Form.Group controlId="Login">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              value={this.state.login}
              onChange={this.onChangeUsuarioLogin}
            />
          </Form.Group>

          <Form.Group controlId="Contacto">
            <Form.Label>Contacto</Form.Label>
            <Form.Control
              type="text"
              value={this.state.contacto}
              onChange={this.onChangeUsuarioContacto}
            />
          </Form.Group>

          <Button variant="info" size="lg" block="block" type="submit">
            Crear usuario
          </Button>
        </Form>
      </div>
    );
  }
}
