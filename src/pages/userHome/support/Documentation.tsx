import "./Documentation.css";
import { FaBook, FaCogs, FaDesktop, FaUserGraduate } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Card } from "../../../components/Card";


export const Documentation = () => {
  return (
    <section className="card-section">
      <h1>Centro de Documentación</h1>

      <div className="card-grid">
          <Card
            icon={FaBook}
            title="Manuales de Usuario"
            paragraph="Guías completas para utilizar todas las funcionalidades de la aplicación."
            label_btn="Ver manuales"
            href="/documentacion/manual-usuario"
          />
          <Card
            icon={FaUserGraduate}
            title="Guías de Inicio Rápido"
            paragraph="Pasos sencillos para comenzar a utilizar la aplicación rápidamente."
            label_btn="Ver Guías"
            href="/documentacion/guia-inicio"
          />
          <Card
            icon={FaCogs}
            title="Documentación Técnica"
            paragraph="Detalles técnicos sobre las pruebas, algoritmos y arquitectura de la aplicación."
            label_btn="Ver Documentación"
            href="/documentacion/documentacion-tecnica"
          />
          <Card
          // https://ml.cms.waikato.ac.nz/weka/Witten_et_al_2016_appendix.pdf
          // https://ieeexplore.ieee.org/document/396988
          // https://waikato.github.io/weka-wiki/documentation/
            icon={FaDesktop}
            title="Requisitos del Sistema"
            paragraph="Información sobre los requisitos necesarios para utilizar la aplicación de manera óptima."
            label_btn="Ver Requisitos"
            href="/documentacion/requisitos-sistema"
          />
      </div>
      {/* Enlaces a otras subsecciones */}
      <div className="support-links">
        <Link to={"/support/faq"}>Preguntas frecuentes</Link>
        <Link to={"/support/contact"}>Contacto de Soporte</Link>
        <Link to={"/support/resources"}>Recursos</Link>
      </div>
    </section>
  )
};
