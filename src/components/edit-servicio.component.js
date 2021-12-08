import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditServicio extends Component {

  constructor(props) {
    super(props)

    this.onChangeServicioCategoria = this.onChangeServicioCategoria.bind(this);
    this.onChangeServicioDescripcion = this.onChangeServicioDescripcion.bind(this);
    this.onChangeServicioNombre = this.onChangeServicioNombre.bind(this);
    this.onChangeServicioPrecio = this.onChangeServicioPrecio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      categoria: '',
      descripcion: '',
      nombre: '',
      precio: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Servicios/edit-Servicio/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          categoria: res.data.categoria,
          descripcion: res.data.descripcion,
          nombre: res.data.nombre,
          precio: res.data.precio
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeServicioCategoria(e) {
    this.setState({ categoria: e.target.value })
  }

  onChangeServicioDescripcion(e) {
    this.setState({ descripcion: e.target.value })
  }

  onChangeServicioNombre(e) {
    this.setState({ nombre: e.target.value })
  }

  onChangeServicioPrecio(e) {
    this.setState({ precio: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const ServicioObject = {
      categoria: this.state.categoria,
      descripcion: this.state.descripcion,
      nombre: this.state.nombre,
      precio: this.state.precio
    };

    axios.put('http://localhost:4000/Servicios/update-Servicio/' + this.props.match.params.id, ServicioObject)
      .then((res) => {
        console.log(res.data)
        console.log('Servicio successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Servicio List 
    this.props.history.push('/Servicio-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Categoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" value={this.state.categoria} onChange={this.onChangeServicioCategoria} />
        </Form.Group>

        <Form.Group controlId="Nombre">
          <Form.Label>Nombre del Servicio</Form.Label>
          <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeServicioNombre} />
        </Form.Group>
        
        <Form.Group controlId="Descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" value={this.state.descripcion} onChange={this.onChangeServicioDescripcion} />
        </Form.Group>

        <Form.Group controlId="Precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" value={this.state.precio} onChange={this.onChangeServicioPrecio} />
        </Form.Group>

        <Button variant="info sombra" size="lg" block="block" type="submit">
          <b>Actualizar servicio</b>
        </Button>
      </Form>
    </div>);
  }
}
