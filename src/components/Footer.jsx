import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {

  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-container">
            <h3>Contactanos</h3>
          </div>
          <div className="contact-tel">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" color="gray"/>
            <p>221-5940369</p>
          </div>
          <div className="contact-email">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray"/>
            <p>cecimayer@hotmail.com</p>
          </div>
          <div className="contact-city">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="gray"/>
            <p>La Plata, Buenos Aires</p>
          </div>
        </Col>
        <Col>
          <div>
            <h3>Links</h3>
          </div>
          <ul>
              <li><a href="https://google.com.ar">Categorias</a></li>
              <li><a href="https://google.com.ar">Medios de pago</a></li>
              <li><a href="https://google.com.ar">Envios</a></li>
              <li><a href="https://google.com.ar">Nosotras</a></li>
              <li><a href="https://google.com.ar">Ustedes</a></li>
          </ul>
        </Col>
        <Col>
          <div>
            <h3>Puntos de venta</h3>
          </div>
          <p>Tenemos diferentes puntos de ventas, en todo el país.</p>
        </Col>
        <Col>
          <div>
            <h3>Contacto</h3>
          </div>
          <p>Siempre estamos en línea para lo que necesites.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
