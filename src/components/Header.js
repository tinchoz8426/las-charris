import { Container, Row, Col, Image, Button } from "react-bootstrap";
import logoCharris from "../logo-lascharris.png";
import "./Header.css";

function Header() {
  return (
    <Container>
      <Row className="my-5">
        <Col className="d-flex justify-content-center flex-column">
          <h1 className="header-title">LasCharris</h1>
          <h2 className="header-subtitle">Pañuelos de diseño. Somos Ce y Be, concuñadas creativas. ¡Nuestro mundo es un pañuelo!</h2>
          <Button className="header-button align-self-start">Comprar ahora</Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Image className="header-image" src={logoCharris}/> 
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
