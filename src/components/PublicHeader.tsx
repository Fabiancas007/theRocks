import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/svg/logos/LogoHorWhite.svg";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./PublicHeader.css";

export const PublicHeader = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <img className="logo" src={logo} alt="Logo TheRocks" height={40} />
          </Navbar.Brand>
          <Nav.Link as={Link} to="/login" className="order-lg-last ms-auto">
            <Button label="Iniciar sesión" className="primary"/>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pe-5">
              <Nav.Link as={Link} to="/" onClick={() => handleNavClick("hero")}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={() => handleNavClick("features")}>
                Características
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={() => handleNavClick("how-its-work")}>
                ¿Cómo funciona?
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={() => handleNavClick("benefits")}>
                Beneficios
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={() => handleNavClick("contact")}>
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
