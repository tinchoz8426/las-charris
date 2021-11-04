import { Container, Row, Col } from "react-bootstrap";
import "./Subheader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShippingFast, faCreditCard, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Subheader() {
  return (
    <Container>
      <Row className="row-container">
        <Col className="subcomponent-container">
          <div className="ship-container__title">
            <FontAwesomeIcon icon={faShippingFast} size="lg"/>
            <h3>Envíos</h3>
          </div>
          <p className="ship-container__paragraph">Realizamos envíos a todo el país, por Correo Argentino.</p>
        </Col>
        <Col className="subcomponent-container">
          <div className="ship-container__title">
            <FontAwesomeIcon icon={faCreditCard} size="lg"/>
            <h3>Medios de pago</h3>
          </div>
          <p className="ship-container__paragraph">Aceptamos efectivo y transferencia bancaria.</p>
        </Col>
        <Col className="subcomponent-container">
          <div className="ship-container__title">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"/>
            <h3>Puntos de venta</h3>
          </div>
          <p className="ship-container__paragraph">Tenemos diferentes puntos de ventas, en todo el país.</p>
        </Col>
        <Col className="subcomponent-container">
          <div className="ship-container__title">
            <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
            <h3>Contacto</h3>
          </div>
          <p className="ship-container__paragraph">Siempre estamos en línea para lo que necesites.</p>
        </Col>
      </Row>
    </Container>
  );
}
