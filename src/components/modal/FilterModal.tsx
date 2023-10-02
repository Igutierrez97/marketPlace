"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import Filtros from "@/components/iconos/Filtros";
import Selects from "./Selects";
import Inputs from "./Inputs";
import CheckBoxs from "./CheckBoxs";

export default function FilterModal() {
  const router = useRouter();
  const pathname = usePathname();
  let baseUrl = "";
  pathname.includes("shops")
    ? (baseUrl = "/shops/filter?")
    : (baseUrl = "/products/filter?");


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formValues, setFormValues] = useState({
    precioMinimo: "",
    precioMaximo: "",
    provincia: "",
    municipio: "",
    moneda: ["USD", "CUP"],
  });

  const handleMonedaChange = (values: any) => {
    setFormValues({
      ...formValues,
      moneda: values,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Validar que solo se permita un punto decimal
    const regex = /^\d*\.?\d*$/;
    if (!regex.test(value)) {
      return; // Si no cumple la validación, no actualices el valor
    }
    // Actualizar el valor en el estado
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const params = new URLSearchParams();
  if (formValues.precioMaximo) {
    params.set("precioMaximo", formValues.precioMaximo);
  }
  if (formValues.precioMinimo) {
    params.set("precioMinimo", formValues.precioMinimo);
  }
  if (formValues.provincia) {
    params.set("provincia", formValues.provincia);
  }
  if (formValues.municipio) {
    params.set("municipio", formValues.municipio);
  }
  if (formValues.moneda) {
    params.set("moneda", formValues.moneda.join(""));
  }

  const url = `${params.toString()}`;
  
  const handleSubmit = (e: any) => {
    if (
      parseFloat(formValues.precioMinimo) > parseFloat(formValues.precioMaximo)
    ) {
      alert("El precio mínimo debe ser menor o igual que el precio máximo");
    } else {
      router.push(`${baseUrl}${url}`)
      setFormValues({
        precioMinimo: "",
        precioMaximo: "",
        provincia: "",
        municipio: "",
        moneda: ["USD", "CUP"],
      });
    }
  };

  return (
    <>
      <div>
        <Tooltip
          showArrow
          placement="right"
          content="Filtrar datos"
          classNames={{
            base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400",
            arrow: "bg-neutral-400 dark:bg-white",
          }}
        >
          <Button
            style={{
              position: "fixed",
              bottom: "120px",
              right: "25px",
              zIndex: "10",
              borderRadius: "100%",
              width: "40px",
              height: "60px",
            }}
            size="sm"
            startContent={<Filtros width={30} height={40} />}
            color="danger"
            onPress={onOpen}
          />
        </Tooltip>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Filtrar Datos
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <Inputs value={formValues} onChange={handleInputChange} />
                  <Selects value={formValues} onChange={handleChange} />
                  <CheckBoxs
                    value={formValues.moneda}
                    onChange={handleMonedaChange}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={(e) => {
                    handleSubmit(e);
                    onClose();
                  }}
                >
                  Filtrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
