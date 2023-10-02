import Carrusel from "@/components/carrusel/Carrusel";
import { Suspense } from "react";
import Loading from "./loading";


export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
      
      {children}
      </Suspense>
    </div>
  );
}
