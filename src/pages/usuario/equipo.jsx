import React, { useState, useEffect } from "react";
import NavbarUser from "../../components/NavbarUser";
import FooterUser from "../../components/FooterUser";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Avatar from "../../images/avatar.jpeg";

const Equipo = () => {
  const [repo, setRepo] = useState([]);

  const getRepo = () => {
    axios
      .get("http://localhost:4000/usuarios/")
      .then((res) => {
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
        <h1 className="py-3">Nuestro equipo</h1>
        <Row xs={2} md={3} className="g-4 mb-4">
          {repo.map((repos) => (
            <Col>
              <Card className="sombra">
                {/* <Card.Header>{repos.categoria}</Card.Header> */}
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <img alt="" src={Avatar} className="radius-50 img-80" />
                  </div>
                  <Card.Title className="text-center">
                    {repos.nombre}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    {repos.rol}
                  </Card.Subtitle>
                  {/* <Card.Text>{repos.descripcion}</Card.Text> */}
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

export default Equipo;
