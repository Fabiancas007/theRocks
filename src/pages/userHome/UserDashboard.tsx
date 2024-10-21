import "./UserDashboard.css";
import test from "../../assets/images/gif/test.gif";
import rocks from "../../assets/images/gif/rocks.gif";
import correlations from "../../assets/images/gif/correlations.gif";
import support from "../../assets/images/gif/support.gif";
import settings from "../../assets/images/gif/settings.gif";
import { Card } from "../../components/Card";

export const Dashboard = () => {
  return (
    <section className="card-section">
      {/* Panel de Bienvenida */}
      <div className="welcome-panel">
        <h1>¡Bienvenido, Usuario!</h1>
        <p>
          Gestiona y realiza pruebas de las propiedades de resistenciay y
          deformación de rocas de manera eficiente y precisa.
        </p>
      </div>

      {/* Acceso Rápido a Funcionalidades Principales */}
      <div className="card-grid">
        <Card
          url_image={test}
          title="Iniciar Nueva Prueba"
          redirectTo="/test"
          style={{height:'50', animation:'ease'}}
        />
        <Card
          url_image={rocks}
          title="Ver Tipos de Rocas"
          redirectTo="/rocks/"
        />
        <Card
          url_image={correlations}
          title="Correlaciones de resistencia y deformación"
          redirectTo="/correlations"
        />
        <Card url_image={support} title="Soporte" redirectTo="/support/faq" />
        <Card
          url_image={settings}
          title="Configuración"
          redirectTo="/settings"
        />
      </div>

      {/* Noticias y Actualizaciones */}
      <div className="news-section">
        <h2>Noticias y Actualizaciones</h2>
        <ul>
          <li>
            Actualización de la funcionalidad de pruebas: Ahora puedes exportar
            resultados en PDF.
          </li>
          <li>Nuevo tipo de roca agregado: Granito.</li>
          <li>
            Mejora en el algoritmo de regresión lineal para mayor precisión.
          </li>
        </ul>
      </div>

      {/* Tutoriales y Recursos Rápidos */}
      <div className="resources-section">
        <h2>Tutoriales y Recursos Rápidos</h2>
        <div className="resources-links">
          <a href="/tutoriales">Ver Tutoriales</a>
          <a href="/documentacion">Documentación</a>
        </div>
      </div>
    </section>
  );
};
