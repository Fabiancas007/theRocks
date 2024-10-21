import "./Rock.css";
import rocksData from "../../assets/data/Rocas_canvas_info.json";
import correlationsData from "../../assets/data/Correlations.json";
import { SelectInput } from "../../components/SelectInput";
import { SearchInput } from "../../components/SearchInput";
import { Card } from "../../components/Card";
import { useState } from "react";

// Función para importar dinámicamente todas las imágenes de la carpeta
const importAll = (requireContext: any) => {
  let images: { [key: string]: string } = {};
  requireContext.keys().forEach((key: string) => {
    images[key.replace("./", "")] = requireContext(key);
  });
  return images;
};

// Importa todas las imágenes dentro de la carpeta assets/rocks
const images = importAll(
  require.context("../../assets/images/webp/rocks", false, /\.(webp)$/)
);

export const Rock = () => {
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [searchRockType, setSearchRockType] = useState("");

  // Función para filtrar por origen y nombre
  const filteredRocks = rocksData.filter((rock) => {
    const matchesOrigin =
      selectedOrigin === "" || rock.ORIGEN === selectedOrigin;
    const matchesRockType =
      searchRockType === "" ||
      rock.NOMBRE.toLowerCase().includes(searchRockType.toLowerCase());
    return matchesOrigin && matchesRockType;
  });

  // Función para obtener la imagen correcta usando el nombre
  const getImage = (imagePath: string) => {
    const imageName = imagePath.split("/").pop(); // obtiene "Basalto.webp"
    return images[imageName || ""];
  };

  return (
    <section className="card-section">
      <h1>Tipos de Rocas</h1>

      <div className="filters">
        {/* Filtro por Origen */}
        <SelectInput
          label="Origen"
          text="Todos los origenes"
          options={Array.from(
            new Set(correlationsData.map((item) => item.ORIGIN))
          )}
          value={selectedOrigin}
          onSelect={setSelectedOrigin}
        />

        {/* Búsqueda por Tipo de Roca */}
        <SearchInput
          placeholder="Buscar por Nombre de Roca"
          value={searchRockType}
          onSearch={setSearchRockType}
        />
      </div>

      <div className="card-grid">
        {filteredRocks.map((rock) => (
          <Card
            key={rock.NOMBRE}
            url_image={getImage(rock.IMAGEN)} // Usamos getImage para obtener la imagen correcta
            alt_image={rock.NOMBRE}
            title={rock.NOMBRE}
            origin={rock.ORIGEN}
            paragraph={rock.DESCRIPCIÓN}
            label_btn="Ver modelo 3D"
            href={rock["MODELO 3D"]}
          />
        ))}
      </div>
    </section>
  );
};
