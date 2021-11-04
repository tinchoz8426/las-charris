import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logoCharris from "../assets/images/logo-lascharris.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar className="navbar-container" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://google.com.ar">
          <img
            src={logoCharris}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo LASCHARRIS"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pañuelos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Scrunchies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perfuminas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Lazos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link3">Envios</Nav.Link>
            <Nav.Link href="#link4">Medios de pago</Nav.Link>
            <Nav.Link href="#link2">Nosotras</Nav.Link>
            <Nav.Link href="#link2">Ustedes</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
