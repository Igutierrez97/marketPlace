'use client'
import ProductFilterList from "@/components/filterList/ProductFilterList";
import { useSearchParams } from "next/navigation";

export default function Filter() {
  const parameters = useSearchParams();
  const provincia = parameters.get("provincia");
  const municipio = parameters.get("municipio")
  const moneda = parameters.get("moneda")
  const max_price = parameters.get("precioMaximo")
  const min_price = parameters.get("precioMinimo")

  const filterProps = {
    provincia,
    municipio,
    moneda,
    max_price,
    min_price
  };

  return (
    <div className="mt-2"> 
      <ProductFilterList filterProps={filterProps}/>
    </div>
  );
}