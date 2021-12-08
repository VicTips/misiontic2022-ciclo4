import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ServicioTableRow from "./ServicioTableRow";
import NavbarAdmin from "./NavbarAdmin";
import ModalCrearServicio from "./modales/CrearServicio";

export default class ServicioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicios: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Servicios/")
      .then((res) => {
        this.setState({
          Servicios: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.Servicios.map((res, i) => {
      return <ServicioTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="py-3">Servicios</h1>
            <ModalCrearServicio />
          </div>
          <div className="">
            <Table striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>Categoría</th>
                  <th>Nombre del Servicio</th>
                  <th>Descripción</th>
                  <th>Precio del Servicio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>{this.DataTable()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
