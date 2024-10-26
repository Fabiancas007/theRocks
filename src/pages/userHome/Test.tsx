import "./Test.css";
import correlationsData from "../../assets/data/correlations_data.json";
import img from "../../assets/images/svg/graphic.svg";
import { useState } from "react";
import { SelectInput } from "../../components/SelectInput";
import { Button } from "../../components/Button";
import { Chart } from "../../components/Chart";

export const Test: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("");
  const [selectedRockType, setSelectedRockType] = useState<string>("");
  const [elasticityModulus, setElasticityModulus] = useState<string>("");
  const [predictedValue, setPredictedValue] = useState<string | null>(null);
  const [chartData, setChartData] = useState<any>(null);
  const [showDefaultImage, setShowDefaultImage] = useState<boolean>(true); // Nuevo estado para manejar la imagen por defecto

  // Obtener las opciones únicas para el campo "TEST"
  const testOptions = Array.from(
    new Set(correlationsData.map((item) => item.TEST))
  );

  // Obtener las opciones únicas para el campo "ORIGIN"
  const originOptions = Array.from(
    new Set(correlationsData.map((item) => item.ORIGIN))
  );

  // Filtrar los tipos de roca únicos basados en el origen seleccionado y eliminar duplicados
  const rockTypeOptions = Array.from(
    new Set(
      correlationsData
        .filter(
          (item) => selectedOrigin === "" || item.ORIGIN === selectedOrigin
        )
        .map((item) => item.ROCK_TYPE)
    )
  );

  // Función para manejar la predicción y actualizar el gráfico
  const handlePrediction = (): void => {
    const modulus = parseFloat(elasticityModulus);
    if (!isNaN(modulus)) {
      const prediction = (modulus * 0.1).toFixed(2); // Simulación de cálculo
      setPredictedValue(prediction);
    } else {
      setPredictedValue(null);
    }

    const filteredData = correlationsData.filter(
      (item) =>
        item.TEST === selectedTest &&
        item.ORIGIN === selectedOrigin &&
        item.ROCK_TYPE === selectedRockType &&
        item["LOWER LIMIT"] != null && 
        item["UPPER LIMIT"] != null
    );

    if (filteredData.length > 0) {
      const labels = filteredData.map((item) => {
        const year = item.YEAR ?? "";
        return item.AUTHOR + (year ? ", " + year : "");
      });
      const minValues = filteredData.map((item) => item.MIN);
      const maxValues = filteredData.map((item) => item.MAX);
      const lowerLimits = filteredData.map((item) => item["LOWER LIMIT"]);
      const upperLimits = filteredData.map((item) => item["UPPER LIMIT"]);
      const title = Array.from(new Set(filteredData.map((item) => item.TITLE)));
      const y_axis = Array.from(
        new Set(filteredData.map((item) => item["Y AXIS"]))
      );

      setChartData({
        labels,
        minValues,
        maxValues,
        lowerLimits,
        upperLimits,
        title,
        y_axis,
      });
      setShowDefaultImage(false); // Oculta la imagen si los datos están completos
    } else {
      setShowDefaultImage(true); // Muestra la imagen por defecto si faltan datos
      setChartData(null); // Limpiar los datos del gráfico
    }
  };

  return (
    <section>
      <h2 className="subtitle">Realizar Prueba de Propiedades de Rocas</h2>
      <div className="test-section">
        <div className="left">
          {/* Selector para el tipo de prueba */}
          <SelectInput
            label="Tipo de Prueba"
            options={testOptions}
            value={selectedTest}
            text="Selecciona el tipo de prueba"
            onSelect={setSelectedTest}
          />

          {/* Selector para el origen de la roca */}
          <SelectInput
            label="Origen de la Roca"
            options={originOptions}
            value={selectedOrigin}
            text="Selecciona el origen"
            onSelect={setSelectedOrigin}
            disabled={selectedTest === ""}
          />

          {/* Selector para el tipo de roca */}
          <SelectInput
            label="Tipo de Roca"
            options={rockTypeOptions}
            value={selectedRockType}
            text="Selecciona el tipo de roca"
            onSelect={setSelectedRockType}
            disabled={selectedOrigin === ""}
          />

          {/* Entrada para el módulo de elasticidad */}
          <div className="input-field">
            <label>Módulo de Elasticidad</label>
            <input
              type="number"
              value={elasticityModulus}
              onChange={(e) => setElasticityModulus(e.target.value)}
              placeholder="Ingresa el módulo de elasticidad"
            />
          </div>

          <Button
            label="Predecir Coeficiente de Variación"
            onClick={handlePrediction}
            disabled={
              selectedTest === "" ||
              selectedOrigin === "" ||
              selectedRockType === "" ||
              elasticityModulus === ""
            }
            className="primary"
            style={{ width: "100%" }}
          />
        </div>

        <div className="right">
          {/* Renderizar la imagen por defecto si faltan datos, de lo contrario mostrar el gráfico */}
          {showDefaultImage ? (
            <img src={img} alt="Gráfico por defecto" />
          ) : (
            chartData && <Chart data={chartData} />
          )}
        </div>
      </div>
      {/* Mostrar el resultado de la predicción */}
      {predictedValue && (
        <div className="result">
          <h3>Resultado de la Predicción</h3>
          <p>Coeficiente de Variación: {predictedValue}</p>
        </div>
      )}
    </section>
  );
};
