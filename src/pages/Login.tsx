import "./Login.css";
import logo from "../assets/images/svg/logos/logo.svg";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { SearchInput } from "../components/SearchInput";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

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
          label="Ingresar"
          route="/dashboard"
          className="primary"
          style={{ width: "100%" }}
        />
        {/* Divisor */}
        <div className="position-relative">
          <hr className="text-secondary" />
          <div className="divider-content-center">ó</div>
        </div>

        {/* Inicio de sesión con Gmail */}
        <button className="btn btn-outline-secondary w-100 mb-">
          <FcGoogle />
          Ingresar con Google
        </button>

        <div className="mt-3 d-flex justify-content-between">
          <div className= "signup-terms">
            <input type="checkbox" id="formCheck"/>
            <label htmlFor="formCheck">
              Recuerdame
            </label>
          </div>
          <div>
              <Link to="/forgot-password" className="form-link">
                ¿Olvido su contraseña?
              </Link>
          </div>
        </div>
        <Button label="Volver" route="/" className="secondary" />

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
