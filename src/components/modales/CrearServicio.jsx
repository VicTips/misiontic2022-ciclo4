import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import CreateServicio from "../create-servicio.component";

const ModalCrearServicio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info sombra" onClick={handleShow}>
        <b>Crear servicio</b>
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Crear servicio</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateServicio />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCrearServicio;
