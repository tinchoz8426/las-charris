import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logoCharris from "../assets/images/logo-lascharris.png";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar-container" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to={"/"}>
              Inicio
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category">
                Todos los productos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/Pañuelos">
                Pañuelos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Scrunchies">Scrunchies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Perfuminas">Perfuminas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Comunidad" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/we">
                Nosotras
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/you">Ustedes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wholesale">
                Venta mayorista
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/shipping">
              Envios
            </Nav.Link>
            <Nav.Link as={Link} to="/payment">
              Medios de pago
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contactanos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
