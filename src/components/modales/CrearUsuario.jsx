import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import CreateUsuario from "../create-usuario.component";

const ModalCrearUsuario = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info sombra" onClick={handleShow}>
        <b>Crear usuario</b>
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Crear usuario</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateUsuario />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCrearUsuario;