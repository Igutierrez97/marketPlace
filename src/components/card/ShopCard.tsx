import { Shop } from "@/interfaces/shops/shops";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";


export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <Card className="h-72  max-w-[750px] " shadow="sm">
      <CardBody className="p-0 grid grid-cols-3">
        <div className="flex justify-center items-center bg-cyan-400">
          <Image
            className="w-40"
            src={`https://buscador.enzona.net${shop.imagen}`}
          />
        </div>
        <div className="flex justify-center items-center col-span-2 ">
          <div className="mt-5 mx-5">
            <strong>{shop.nombre}</strong>
            <Spacer y={4}/>
            <div>Telefono:{shop.telefono}</div>
            <div>Provincia: {shop.provincia}</div>
            <div>Municipio: {shop.municipio}</div>
            <div>Direcion: {shop.direccion}</div>
            <div className="flex justify-center mt-2">
              <Button as={Link} isExternal color="primary" href={shop.url}>
                Ir a la tienda
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
