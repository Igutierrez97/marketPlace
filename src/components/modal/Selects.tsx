import { Select, SelectItem, Spacer } from "@nextui-org/react";
import { provincias } from "@/utilities/provincias";
import { ChangeEventHandler, useState } from "react";
import { Filtro } from "@/interfaces/filtros/filtros";

interface InputsProps {
  value: Filtro;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Selects({ value, onChange }: InputsProps) {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<string[]>([]);

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMunicipioSeleccionado("");

    const provincia = e.target.value;
    
    setProvinciaSeleccionada(provincia);
  
    const municipiosProvincia = provincias.find(
      (prov) => prov.nombre === provincia
    )?.municipios || [];
  
    setMunicipiosFiltrados(municipiosProvincia);
    
    onChange(e);
  };

  const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const municipio = e.target.value;
    setMunicipioSeleccionado(municipio);
  
    onChange(e);
  };
  
  return (
    <>
      <div className="flex flex-row justify-between">
        <Select
          className="m-2"
          size="sm"
          name="provincia"
          label="Provincia"
          value={value.provincia}
          onChange={handleProvinciaChange}
        >
          {provincias.map((provincia) => (
            <SelectItem key={provincia.nombre} value={provincia.nombre}>
              {provincia.nombre}
            </SelectItem>
          ))}
        </Select>
        <Select
          className="m-2"
          size="sm"
          label="Municipio"
          name="municipio"
          value={municipioSeleccionado}
          onChange={handleMunicipioChange}
          isDisabled={
            provinciaSeleccionada === "Todas las provincias" ||
            !provinciaSeleccionada
          }
        >
          {municipiosFiltrados.map((municipio, index) => (
            <SelectItem key={municipio} value={municipio}>
              {municipio}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}