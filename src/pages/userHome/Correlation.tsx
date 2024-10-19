import "./Correlation.css"
import React, { useState } from 'react';
import correlationsData from '../../assets/Correlations.json';
import { SelectInput } from '../../components/SelectInput';
import { SearchInput } from '../../components/SearchInput';
import Table from '../../components/Table';

export const Correlation = () => {
  const [selectedTest, setSelectedTest] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [searchRockType, setSearchRockType] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');
  const [searchYear, setSearchYear] = useState('');

  // Función para filtrar los datos basados en los selectores y campos de búsqueda
  const filteredCorrelations = correlationsData.filter((correlation) => {
    const matchesTest = selectedTest === '' || correlation.TEST === selectedTest;
    const matchesOrigin = selectedOrigin === '' || correlation.ORIGIN === selectedOrigin;
    const matchesRockType = searchRockType === '' || correlation.ROCK_TYPE.toLowerCase().includes(searchRockType.toLowerCase());
    const matchesAuthor = searchAuthor === '' || correlation.AUTHOR.toLowerCase().includes(searchAuthor.toLowerCase());
    const matchesYear = searchYear === '' || correlation.YEAR.toString().includes(searchYear);

    return matchesTest && matchesOrigin && matchesRockType && matchesAuthor && matchesYear;
  });

  return (
    <section className="correlation-section container">
      <h2>Correlaciones de las Propiedades de Resistencia y Deformidad en Rocas</h2>

      <div className="filters-corr">
        {/* Filtro por Tipo de Prueba */}
        <SelectInput
          label="Tipo de Prueba"
          text="Todas las pruebas"
          options={Array.from(new Set(correlationsData.map((item) => item.TEST)))}
          value={selectedTest}
          onSelect={setSelectedTest}
        />
        {/* Filtro por Origen */}
        <SelectInput
          label="Origen"
          text="Todos los origenes"
          options={Array.from(new Set(correlationsData.map((item) => item.ORIGIN)))}
          value={selectedOrigin}
          onSelect={setSelectedOrigin}
        />
        {/* Búsqueda por Tipo de Roca */}
        <SearchInput
          placeholder="Buscar por Tipo de Roca"
          value={searchRockType}
          onSearch={setSearchRockType}
        />
        {/* Búsqueda por Autor */}
        <SearchInput
          placeholder="Buscar por Autor"
          value={searchAuthor}
          onSearch={setSearchAuthor}
        />
        {/* Búsqueda por Año */}
        <SearchInput
          placeholder="Buscar por Año"
          value={searchYear}
          onSearch={setSearchYear}
        />
      </div>

      {/* Renderizar la tabla con los datos filtrados */}
      <Table data={filteredCorrelations} />
    </section>
  );
}
