import { Filtro } from "@/interfaces/filtros/filtros";
import { Input } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface InputsProps {
  value: Filtro;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Inputs({ value, onChange }: InputsProps) {
  const pathname = usePathname();

  return (
    <div
      className={`flex  ${
        pathname.includes("/shops")
          ? "hidden"
          : " sm:flex-row flex-col justify-between"
      } `}
    >
      <Input
        name="precioMinimo"
        className="m-2"
        type="text"
        pattern="\d*\.?\d*" // Expresión regular para validar números
        label="Precio mínimo"
        placeholder="0.00"
        labelPlacement="outside"
        onChange={onChange}
        value={value.precioMinimo}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Input
        name="precioMaximo"
        className="m-2"
        type="text"
        pattern="\d*\.?\d*" // Expresión regular para validar números
        label="Precio máximo"
        placeholder="0.00"
        labelPlacement="outside"
        onChange={onChange}
        value={value.precioMaximo}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
    </div>
  );
}
