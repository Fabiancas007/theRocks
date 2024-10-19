import analytics from "../../assets/analytics.svg";
import money from "../../assets/money.svg";
import engineer from "../../assets/engineers.svg";
import accessibility from "../../assets/accessibility.svg";
import group from "../../assets/group.svg";
import check from "../../assets/check.svg";
import { Card } from "../../components/Card";

export const Features = () => {
  return (
    <section id="features" className="card-section">
      <h2 className="subtitle">¿Qué puede hacer nuestra plataforma por ti?</h2>
      <div className="card-grid container">
        <Card
          url_image={analytics}
          alt_image="Analisís de predicciones"
          title="Evaluación rápida y precisa"
          paragraph="Algoritmo de regresión lineal para predicciones inmediatas."
        />
        <Card
          url_image={money}
          alt_image=""
          title="Reducción de costos"
          paragraph="Menos ensayos de laboratorio."
        />
        <Card
          url_image={engineer}
          alt_image="Analisís de predicciones"
          title="Diversas propiedades geotécnicas"
          paragraph="Análisis de módulo de elasticidad, cohesión, y más."
        />
        <Card
          url_image={accessibility}
          alt_image="Analisís de predicciones"
          title="Accesibilidad"
          paragraph="Plataforma web accesible desde cualquier dispositivo.."
        />
        <Card
          url_image={group}
          alt_image="Analisís de predicciones"
          title="Uso educativo y profesional"
          paragraph="Apta para profesionales y estudiantes."
        />
        <Card
          url_image={check}
          alt_image="Analisís de predicciones"
          title="Resultados confiables"
          paragraph="Verificación y soporte a los resultados de laboratorio con IA."
        />
      </div>
    </section>
  );
};
