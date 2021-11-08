import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col>
            <div>
              <h3 className="contact-title">Contactanos</h3>
            </div>
            <div className="contact-tel">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#128C7E" />
              <p>221-5940369</p>
            </div>
            <div className="contact-email">
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#4285F4" />
              <p>cecimayer@hotmail.com</p>
            </div>
            <div className="contact-city">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#E50914" />
              <p>La Plata, Buenos Aires</p>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="links-title">Links</h3>
            </div>
            <ul className="links-list-container">
              <li className="links-item">
                <a href="https://google.com.ar">Categorias</a>
              </li>
              <li className="links-item">
                <a href="https://google.com.ar">Medios de pago</a>
              </li>
              <li className="links-item">
                <a href="https://google.com.ar">Envios</a>
              </li>
              <li className="links-item">
                <a href="https://google.com.ar">Nosotras</a>
              </li>
              <li className="links-item">
                <a href="https://google.com.ar">Ustedes</a>
              </li>
            </ul>
          </Col>
          <Col>
            <div>
              <h3 className="extras-title">Extras</h3>
            </div>
            <ul className="extras-list-container">
              <li className="extras-item">
                <a href="https://google.com.ar">Tips para pañuelos</a>
              </li>
              <li className="extras-item">
                <a href="https://google.com.ar">Videos</a>
              </li>
              <li className="extras-item">
                <a href="https://google.com.ar">Looks</a>
              </li>
              <li className="extras-item">
                <a href="https://google.com.ar">Venta mayorista</a>
              </li>
              <li className="extras-item">
                <a href="https://google.com.ar">FAQS</a>
              </li>
            </ul>
          </Col>
          <Col>
            <div>
              <h3 className="social-title">Nuestras redes</h3>
            </div>
            <div className="icons-social-container">
              <a
                href="https://www.instagram.com/lascharris/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <FontAwesomeIcon
                  className="instagram-icon"
                  icon={faInstagram}
                  size="2x"
                />
              </a>
              <a
                href="https://www.facebook.com/lascharris-100660305075035"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <FontAwesomeIcon
                  className="facebook-icon"
                  icon={faFacebook}
                  size="2x"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <address style={{ marginBottom:'0', textAlign:'center', color:'black' }}>La Plata, Buenos Aires - Argentina</address>
    </footer>
  );
}

export default Footer;
