"use client"; // Error components must be Client Components

import { Button, Spacer } from "@nextui-org/react";
import { useEffect } from "react";
import Back from "@/components/iconos/Back";
import Refresh from "@/components/iconos/Refresh";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center flex-col mt-[-70px]">
    <h2>Ocurrió un error en el servidor!!</h2>
    <p>Vuela a cargar la pagina o navegue a la ruta anterior.</p> 
        
    <div className="w-full mt-6 flex justify-center">
      <Button onClick={()=>{router.back()}} startContent={<Back />}>Ruta anterior</Button>
      <Spacer x={10}/>
      <Button
        startContent={<Refresh />}
        onClick={() => window.location.reload()}
      >
        Volver a cargar
      </Button>
    </div>
  </div>
  );
}
