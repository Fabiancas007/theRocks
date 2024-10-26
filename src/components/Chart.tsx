import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: any;
}

export const Chart = (props: ChartProps) => {
  const chartData = {
    labels: props.data.labels,
    datasets: [
      {
        label: "Mínimo",
        data: props.data.minValues,
        backgroundColor: "transparent",
        pointRadius: 5,
        pointBackgroundColor: "#168CAB", // Relleno de puntos
        showLine: false, // Muestra puntos sin líneas
        pointStyle: "circle", // Asegura que sea un círculo sólido en la leyenda
      },
      {
        label: "Máximo",
        data: props.data.maxValues,
        backgroundColor: "transparent",
        pointRadius: 5,
        pointBackgroundColor: "orange", // Relleno de puntos
        showLine: false, // Muestra puntos sin líneas
        pointStyle: "circle", // Asegura que sea un círculo sólido en la leyenda
      },
      {
        label: "Límite Inferior",
        data: props.data.lowerLimits,
        borderColor: "red",
        borderWidth: 2,
        pointRadius: 0, // Sin puntos
        showLine: true, // Muestra una línea
        pointStyle: "line", // Esto asegura que en la leyenda aparezca una línea
      },
      {
        label: "Límite Superior",
        data: props.data.upperLimits,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 0, // Sin puntos
        showLine: true, // Muestra una línea
        pointStyle: "line", // Asegura que en la leyenda aparezca una línea
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permite que el gráfico ajuste su tamaño sin mantener una relación de aspecto estricta
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8, // Ajustar el tamaño de los puntos en la leyenda
          boxHeight: 8, // Cambiar la altura de los puntos (círculos) en la leyenda
        },
      },
      title: {
        display: true,
        text: props.data.title,
        font: {
          size: window.innerWidth < 40 ? 16 : 20, // Ajustar tamaño de la fuente en pantallas pequeñas
          weight: "bold" as "bold",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Autores",
          font: {
            size: window.innerWidth < 400 ? 14 : 16, // Tamaño de texto más pequeño en pantallas pequeñas
            weight: "bold" as "bold",
          },
        },
        
      },
      y: {
        title: {
          display: true,
          text: props.data.y_axis,
          font: {
            size: window.innerWidth < 400 ? 14 : 16, // Tamaño de texto más pequeño en pantallas pequeñas
            weight: "bold" as "bold",
          },
        },
        // min: 0,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
