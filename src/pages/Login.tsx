import "./Login.css";
import logo from "../assets/images/svg/logos/logo.svg";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { SearchInput } from "../components/SearchInput";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Función para manejar la solicitud de contraseña
  const handleForgotPassword = async () => {
    const { value: userEmail } = await Swal.fire({
      title: "¿Olvidó su contraseña?",
      input: "email",
      inputLabel: "Ingrese su correo electrónico",
      inputPlaceholder: "correo@ejemplo.com",
      confirmButtonText: "Enviar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: "my-btn primary", // Clase de estilo para el botón
        cancelButton: "my-btn secondary", // Clase de estilo para el botón de cancelar
      },
      inputValidator: (value) => {
        if (!value) {
          return "Por favor ingrese su correo electrónico";
        }
        return null;
      },
    });
    if (userEmail) {
      console.log("Correo ingresado para recuperación:", userEmail);
      // Aquí va la lógica para enviar el correo de recuperación


      Swal.fire({
        title: 'Correo de recuperación enviado',
        text: 'Se ha enviado un correo de recuperación a su bandeja de entrada.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'my-btn primary',
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario de login enviado:", {
      email,
      password,
      // rememberMe,
    });
  };

  return (
    <section className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <Link to={"/"}>
            <img src={logo} alt="Logo de TheRocks" className="signup-logo" />
          </Link>
        </div>
        <h2>Inicia sesión</h2>
        <p>Obtén acceso a tu cuenta.</p>

        <div className="signup-inputs login-inputs">
          <div className="input-with-icon">
            <div className="input-icon-container">
              <FaUser className="input-icon" />
            </div>
            <SearchInput
              placeholder="Correo electrónico"
              value={email}
              onSearch={setEmail}
            />
          </div>
          <div className="input-with-icon">
            <div className="input-icon-container">
              <FaLock className="input-icon" />
            </div>
            <SearchInput
              placeholder="Contraseña"
              value={password}
              onSearch={setPassword}
              type="password"
            />
          </div>
        </div>
        <Button
          type="submit"
          label="Ingresar"
          route="/dashboard"
          className="primary"
          style={{ width: "100%" }}
        />
        <div>
          <Link
            to="#"
            onClick={handleForgotPassword}
            className="form-link forgot"
          >
            ¿Olvido su contraseña?
          </Link>
        </div>

        <Button
          label="Volver"
          route="/"
          className="secondary"
          style={{ width: "100%" }}
        />

        <div className="mt-3 d-flex justify-content-between">
          ¿Aún no tiene una cuenta?
          <Link to="/signup" className="form-link fw-bold">
            Registrese
          </Link>
        </div>
      </form>
    </section>
  );
};
