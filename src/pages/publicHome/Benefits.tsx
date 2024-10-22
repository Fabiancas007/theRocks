import { Card } from "../../components/Card";
import { FaClock, FaRobot, FaGlobeAmericas } from "react-icons/fa";

export const Benefits = () => {
  return (
    <section id="benefits" className="card-section">
      <h2 className="subtitle">¿Por qué elegirnos?</h2>
      <div className="card-grid">
        <Card
        icon={FaClock}
        title="Ahorro de tiempo y dinero"
        paragraph="Optimiza tus procesos, verificando lo resultados de ensayos y tiempo de análisis."
        />
        <Card
        icon={FaRobot}
        title="Resultados basados en IA"
        paragraph="Predicciones precisas utilizando algoritmos de Machine Learning."
        />
        <Card
        icon={FaGlobeAmericas}
        title="Acceso en cualquier lugar"
        paragraph="Utiliza nuestra plataforma desde cualquier dispositivo, en cualquier momento."
        />
      </div>
    </section>
  );
};
