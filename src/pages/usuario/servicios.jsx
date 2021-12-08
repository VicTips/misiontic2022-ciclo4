import React, { useState, useEffect } from "react";
import NavbarUser from "../../components/NavbarUser";
import FooterUser from "../../components/FooterUser";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Servicios = () => {
  const [repo, setRepo] = useState([]);

  const getRepo = () => {
    axios.get("http://localhost:4000/Servicios/").then((res) => {
      const myRepo = res.data;
      setRepo(myRepo);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => getRepo(), []);

  return (
    <div>
      <NavbarUser />
      <div className="container cuerpo">
        <h1 className="py-3">Servicios</h1>
        <Row xs={1} md={2} className="g-4 mb-4">
          {repo.map((repos) => (
            <Col>
              <Card className="sombra">
                <Card.Header>{repos.categoria}</Card.Header>
                <Card.Body>
                  <Card.Title>{repos.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    $ {repos.precio}
                  </Card.Subtitle>
                  <Card.Text>{repos.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <FooterUser />
    </div>
  );
};

export default Servicios;
