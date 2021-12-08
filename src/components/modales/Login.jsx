import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ModalLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info sombra" onClick={handleShow}>
        <b>Ingresar</b>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Ingresar</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <NavLink className="btn btn-info sombra" to="/servicio-list"><b>Ingresar</b></NavLink>
          <Button variant="danger sombra" onClick={handleClose}>
            <b>Cancelar</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin