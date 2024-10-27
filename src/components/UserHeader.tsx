import "./UserHeader.css";
import logo from "../assets/images/svg/logos/LogoHorWhite.svg";
import Swal from "sweetalert2";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "./Button";
import { FaUserCircle } from "react-icons/fa";

export const UserHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Función para mostrar la alerta de confirmación de cierre de sesión
  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Está seguro de que quiere cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "my-btn primary",
        cancelButton: "my-btn secondary",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/"); // Redirige al usuario al inicio si confirma
      }
    });
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
          <Navbar.Brand as={Link} to="/dashboard">
            <img className="logo" src={logo} alt="Logo TheRocks" height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pe-5">
              <Nav.Link as={Link} to="/dashboard">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/test">
                Pruebas
              </Nav.Link>
              <Nav.Link as={Link} to="/rocks">
                Rocas
              </Nav.Link>
              <Nav.Link as={Link} to="/correlations">
                Correlaciones
              </Nav.Link>
              <NavDropdown
                className="nav-dropdown"
                title="Soporte"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  as={Link}
                  to="/support/faq"
                >
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  as={Link}
                  to="/support/documentation"
                >
                  Documentación
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  as={Link}
                  to="/support/contact"
                >
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-dropdown-item"
                  as={Link}
                  to="/support/resources"
                >
                  Recursos
                </NavDropdown.Item>
              </NavDropdown>

              {/* Menú Desplegable de Usuario */}
              <Dropdown
                className="nav-dropdown"
                show={showDropdown}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Dropdown.Toggle
                  as="div"
                  id="user-menu"
                  className="user-avatar"
                  bsPrefix="custom-toggle"
                >
                  <FaUserCircle size={30} color="#fff" />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" className="dropdownMenu">
                  <Dropdown.ItemText className="username nav-dropdown-item">
                    Fabián Católico
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    as={Link}
                    to="/account"
                    className="nav-dropdown-item"
                  >
                    Mi cuenta
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/settings"
                    className="nav-dropdown-item"
                  >
                    Ajustes
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="nav-dropdown-item">
                    <Button
                      label="Cerrar Sesión"
                      onClick={handleLogout}
                      className="secondary"
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
