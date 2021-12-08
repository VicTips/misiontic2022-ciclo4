import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ModalContacto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="m-0" onClick={handleShow}>
        Contáctenos
      </p>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Contáctenos</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est repellat laborum explicabo rerum quasi ut, quas culpa quis rem nemo repudiandae neque suscipit dignissimos cupiditate voluptatibus iure doloribus sequi!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info sombra" onClick={handleClose}>
            <b>Cerrar</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContacto