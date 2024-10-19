import "./HowItsWork.css";
import { Button } from "../../components/Button";
import img1 from "../../assets/img3.webp";
import { Col, Row, Container } from "react-bootstrap";

export const HowItsWork = () => {
  return (
    <section id="how-its-work">
      <h2 className="subtitle">¿Cómo funciona la aplicación?</h2>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={img1} alt="rock_type" className="img-fluid left-image" />
          </Col>
          <Col md={6}>
            <ul className="steps-list">
              <li className="step-item" data-aos="fade-right">
                <div className="step-description">
                  <h3>Selecciona la propiedad y tipo de roca</h3>
                  <p>Escoge el tipo de ensayo y origen de la roca.</p>
                </div>
              </li>
              <li className="step-item" data-aos="fade-left">
                <div className="step-description">
                  <h3>Ingresa los parámetros clave</h3>
                  <p>
                    Proporciona los datos necesarios (módulo de elasticidad,
                    etc.).
                  </p>
                </div>
              </li>
              <li className="step-item" data-aos="fade-right">
                <div className="step-description">
                  <h3>Genera las predicciones</h3>
                  <p>El algoritmo IA predice los resultados de las propiedades.</p>
                </div>
              </li>
              <li className="step-item" data-aos="fade-left">
                <div className="step-description">
                  <h3>Toma decisiones informadas</h3>
                  <p>
                    Selecciona la correlación más adecuada para tu proyecto.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <Button
              label="Conoce más"
              href="https://waikato.github.io/weka-wiki/documentation/"
              className="primary"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
