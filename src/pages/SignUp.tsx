import './SignUp.css';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { SearchInput } from '../components/SearchInput';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro
    console.log('Formulario enviado:', { firstName, lastName, email, password, confirmPassword });
  };


  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <p>Crea tu cuenta. Es gratis y solo toma un minuto.</p>

        <div className="signup-inputs">
          <SearchInput
            placeholder="Nombres"
            value={firstName}
            onSearch={setFirstName}
          />
          <SearchInput
            placeholder="Apellidos"
            value={lastName}
            onSearch={setLastName}
          />

          <SearchInput
            placeholder="Correo electrónico"
            value={email}
            onSearch={setEmail}
          />

          <SearchInput
            placeholder="Contraseña"
            value={password}
            onSearch={setPassword}
            type="password"
          />

          <SearchInput
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onSearch={setConfirmPassword}
            type="password"
          />
        </div>

        <div className="signup-terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Acepto los <a href="https://app.aluracursos.com/loginForm?urlAfterLogin=%5BaHR0cHM6Ly9hcHAuYWx1cmFjdXJzb3MuY29tL2NvdXJzZXMvbWluZQ%5D">Términos de uso</a>
          </label>
        </div>

        <div className="signup-btns">
          <Button
            label="Registrar"
            onClick={handleSubmit} // 
            className="primary register-button"
          />
          <Button
            label="Volver"
            className="secondary back-button"
            route='/login'
          />
        </div>
      </form>
    </div>
  );
};
