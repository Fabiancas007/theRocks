import "./Table.css";

export default function Table({ data }: { data: any[] }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tipo de Prueba</th>
            <th>Origen</th>
            <th>Tipo de Roca</th>
            <th>Autor</th>
            <th>Año</th>
            <th>Mínimo</th>
            <th>Máximo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((correlation, index) => (
            <tr key={index}>
              <td data-label="Tipo de Prueba">{correlation.TEST}</td>
              <td data-label="Origen">{correlation.ORIGIN}</td>
              <td data-label="Tipo de Roca">{correlation.ROCK_TYPE}</td>
              <td data-label="Autor">{correlation.AUTHOR}</td>
              <td data-label="Año">{correlation.YEAR || 'N/A'}</td>
              <td data-label="Mínimo">{correlation.MIN || 'N/A'}</td>
              <td data-label="Máximo">{correlation.MAX || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
