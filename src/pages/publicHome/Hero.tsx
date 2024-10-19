import "./Hero.css";
import img1 from "../../assets/fondo1.webp";
import img2 from "../../assets/fondo2.webp";
import img3 from "../../assets/fondo3.webp";
import img4 from "../../assets/fondo4.webp";
import { ImageCarousel } from "../../components/ImageCarousel";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../components/Button";

var images = [img1, img2, img3, img4];

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Row className="container">
        <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
          <h1>
            Optimiza el análisis geotécnico de tus proyectos con Inteligencia
            Artificial
          </h1>
          <p>
            Predicciones fiables basadas en correlaciones geotécnicas y ensayos
            de laboratorio, reduciendo tiempo y costos en proyectos de
            infraestructura.
          </p>
          <Button label="Comienza ahora" route="/login" className="primary
          "/>
        </Col>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-6 test">
          <ImageCarousel images={images} />
        </Col>
      </Row>
    </section>
  );
};
