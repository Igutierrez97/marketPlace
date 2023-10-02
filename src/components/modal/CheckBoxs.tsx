import { Filtro } from "@/interfaces/filtros/filtros";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

interface CheckBoxProps {
  value: string[];
  onChange: (values: string[]) => void;
}

export default function CheckBoxs({ value, onChange }: CheckBoxProps) {
  const handleCheckboxChange = (values: string[]) => {
    // Verificar si no hay ningún checkbox seleccionado
    if (values.length === 0) {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción específica
      return;
    }

    onChange(values);
  };

  return (
    <div className="flex justify-center">
      <CheckboxGroup
        name="moneda"
        className="text-center"
        orientation="horizontal"
        label="Monedas"
        color="warning"
        value={value}
        onValueChange={handleCheckboxChange}
      >
        <Checkbox value="USD" size="md">
          USD
        </Checkbox>
        <Checkbox size="md" value="CUP">
          MN
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
