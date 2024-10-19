import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/LogoHorWhite.svg";

export const AdminHeader = () => {
  return (
    <header>
      <Navbar
        data-bs-theme="dark"
        expand="lg"
        className="navbar-section bg-body-tertiary"
        id="nav-bar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={logo} alt="Logo" height={30} />
          </Navbar.Brand>
          <Button label="Cerrar sesión" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pe-5">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/test">
                Test
              </Nav.Link>
              <Nav.Link as={Link} to="/statistics">
                Estadisticas
              </Nav.Link>
              <NavDropdown
                className="nav-dropdown"
                title="Soporte"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  href="#documentation"
                >
                  Documentación
                </NavDropdown.Item>
                <NavDropdown.Item className="nav-dropdown-item" href="#support">
                  Soporte técnico
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
