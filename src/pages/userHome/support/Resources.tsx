import "./Resources.css";
import { FaChalkboardTeacher, FaDownload, FaLink, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card } from "../../../components/Card";

export const Resources = () => {
  return (
    <div className="recursos-page">
      <h1>Recursos</h1>
      
      <div className="resources-sections">
        <Card
            icon={FaVideo}
            title="Tutoriales en Video"
            paragraph="Aprende a utilizar las funcionalidades de la aplicación a través de videos explicativos."
            label_btn="Ver Tutoriales"
            href="/recursos/tutoriales"
          />
        <Card
            icon={FaChalkboardTeacher}
            title="Webinars y Presentaciones"
            paragraph="Participa en webinars y revisa presentaciones sobre geotecnia y análisis de rocas."
            label_btn="Ver Webinars"
            href="/recursos/webinars"
          />
        <Card
            icon={FaDownload}
            title="Descargas de Recursos"
            paragraph="Accede a documentos descargables como PDFs y eBooks para profundizar en tus conocimientos."
            label_btn="Ver Recursos"
            route="/support/documentation"
          />
        <Card
            icon={FaLink}
            title="Enlaces a Herramientas Externas"
            paragraph="Encuentra enlaces a herramientas y recursos externos que complementan tu trabajo."
            label_btn="Ver Herramientas"
            href="/recursos/herramientas"
          />
      </div>
      {/* Enlaces a otras subsecciones */}
      <div className="support-links">
        <Link to={"/support/faq"}>Preguntas frecuentes</Link>
        <Link to={"/support/documentation"}>Centro de Documentación</Link>
        <Link to={"/support/contact"}>Contacto de Soporte</Link>
      </div>
    </div>
  )
};
