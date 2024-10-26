import './SignUp.css';
import logo from '../assets/images/svg/logos/logo.svg';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button } from '../components/Button';
import { SearchInput } from '../components/SearchInput';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();  // Hook para la navegación

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro
    console.log('Formulario enviado:', { firstName, lastName, email, password, confirmPassword });


    // Alerta de registro exitoso
    Swal.fire({
      title: 'Registro exitoso',
      text: 'Tu cuenta ha sido creada satisfactoriamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'my-btn primary', // Clase CSS del botón de SweetAlert2
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login'); // Redirige a la página de login
      }
    });
  };

  return (
    <section className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <Link to={'/'}><img src={logo} alt="Logo de TheRocks" className='signup-logo' /></Link>
        </div>
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
        <div className="signup-btns">
          <Button
            label="Registrar"
            onClick={handleSubmit} // 
            className="primary register-button"
            disabled={
              firstName === "" ||
              lastName === "" ||
              email === "" ||
              password === "" ||
              confirmPassword === ""
            }
          />
          <Button
            label="Volver"
            className="secondary back-button"
            route='/'
          />
        </div>
      </form>
    </section>
  );
};
