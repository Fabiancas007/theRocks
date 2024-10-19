import "./Login.css";
import img from "../assets/img3.webp";
import logo from "../assets/LogoHorBlack.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Button } from "../components/Button";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <Row className="vh-100 g-0">
      {/* Lado izquierdo */}
      <Col className="col-lg-6 position-relative d-none d-lg-block">
        <div
          className="bg-holder"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Col>

      {/* Lado derecho */}
      <Col className="col-lg-6">
        <Row className=" form-row">
          <Col className="col col-sm-6 col-lg-7 col-xl-6">
            {/* Logo */}
            <a href="/" className="d-flex justify-content-center mb-4">
              <img src={logo} alt="Logo TheRocks" height={70} />
            </a>

            <div className="text-center mb-5">
              <h3>Inicia sesión</h3>
              <p className="text-secondary">Obtén acceso a tu cuenta</p>
            </div>

            {/* Form */}
            <form action="#">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg fs-6"
                  placeholder="Usuario"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg fs-6"
                  placeholder="Contraseña"
                />
              </div>

              <Button label="Ingresar" route="/dashboard" className="primary" style={{ width: '100%' }}/>

              {/* Divisor */}
              <div className="position-relative">
                <hr className="text-secondary" />
                <div className="divider-content-center">ó</div>
              </div>

              {/* Inicio de sesión con Gmail */}
              <button className="btn btn-outline-secondary w-100 mb-">
                <FcGoogle />Ingresar
                con Google
              </button>

              <div className="input-group mb-3 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Recuerdame</small>
                  </label>
                </div>
                <div>
                  <small>
                    <Link to="#" className="form-link">
                      ¿Olvido su contraseña?
                    </Link>
                  </small>
                </div>
              </div>
              <Button label="Volver" route="/" className="secondary" />

            </form>
            <div className="form-paragraph">
              <small>
                ¿Aún no tiene una cuenta?
                <Link to="/signup" className="form-link ps-3 fw-bold">
                  Registrese
                </Link>
              </small>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
