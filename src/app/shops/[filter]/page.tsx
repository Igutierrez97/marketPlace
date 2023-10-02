'use client'
import ShopsFilterList from "@/components/filterList/ShopsFilterList";
import { useSearchParams } from "next/navigation";


export default function Filter() {

  const parameters = useSearchParams();
  const provincia = parameters.get("provincia");
  const municipio = parameters.get("municipio")
  const moneda = parameters.get("moneda")

  const filterProps = {
    provincia,
    municipio,
    moneda,
  };
  

  return (
    <div>
      <ShopsFilterList filterProps={filterProps}/>
    </div>
  );
}
