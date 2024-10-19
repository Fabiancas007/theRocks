import './Test.css';
import correlationsData from '../../assets/Correlations.json';
import React, { useState } from 'react';
import { SelectInput } from '../../components/SelectInput';
import { Button } from '../../components/Button';

// Importar dinámicamente las imágenes
const importAll = (r: __WebpackModuleApi.RequireContext) => {
  let images: { [key: string]: string } = {};
  r.keys().forEach((item: string) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// @ts-ignore: Ignorar verificación de TypeScript para require.context
const images = importAll(require.context('../../assets/graphics', true, /\.(webp|svg)$/));

export const Test: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>('');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedRockType, setSelectedRockType] = useState<string>('');
  const [elasticityModulus, setElasticityModulus] = useState<string>('');
  const [predictedValue, setPredictedValue] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState<string>(images['graphic.svg'] || ''); // Ruta inicial de la imagen

  // Obtener las opciones únicas para el campo "TEST"
  const testOptions = Array.from(new Set(correlationsData.map((item) => item.TEST)));

  // Obtener las opciones únicas para el campo "ORIGIN"
  const originOptions = Array.from(new Set(correlationsData.map((item) => item.ORIGIN)));

  // Filtrar los tipos de roca únicos basados en el origen seleccionado y eliminar duplicados
  const rockTypeOptions = Array.from(
    new Set(correlationsData
      .filter((item) => selectedOrigin === '' || item.ORIGIN === selectedOrigin)
      .map((item) => item.ROCK_TYPE))
  );

  // Función para manejar la predicción y actualizar la imagen
  const handlePrediction = (): void => {
    const modulus = parseFloat(elasticityModulus);
    if (!isNaN(modulus)) {
      const prediction = (modulus * 0.1).toFixed(2); // Simulación de cálculo
      setPredictedValue(prediction);
    } else {
      setPredictedValue(null);
    }

    // Construir la ruta de la imagen basada en las selecciones
    const constructedPath = `${selectedTest}/${selectedOrigin}/${selectedRockType}.webp`;
    const image = images[constructedPath];

    if (image) {
      setImagePath(image);
    } else {
      setImagePath(images['graphic.svg']); // Imagen por defecto
    }
  };

  // Función para manejar el error de carga de la imagen y mostrar la imagen por defecto
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.onerror = null; // Previene bucles infinitos
    e.currentTarget.src = images['graphic.svg']; // Ruta por defecto
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
            disabled={selectedTest === ''}
          />

          {/* Selector para el tipo de roca */}
          <SelectInput
            label="Tipo de Roca"
            options={rockTypeOptions}
            value={selectedRockType}
            text="Selecciona el tipo de roca"
            onSelect={setSelectedRockType}
            disabled={selectedOrigin === ''}
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
              selectedTest === '' ||
              selectedOrigin === '' ||
              selectedRockType === '' ||
              elasticityModulus === ''
            }
            className='primary'
            style={{ width: '100%' }}
          />
        </div>

        <div className="right">
          <img
            src={imagePath}
            alt="Resultado de la Prueba"
            onError={handleImageError}
            className="result-image"
          />
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
