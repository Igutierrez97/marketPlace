import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Skeleton } from "@nextui-org/skeleton";
import { Producto } from "@/interfaces/producto";
import { PopoverDescription } from "../popoverDescription/PopoverDescription";

export default function ProductsCard({ product }: { product: Producto }) {
  const isLoad = !!product;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Skeleton
          isLoaded={isLoad}
          className="pb-0 pt-2 px-4 flex-col items-start"
        >
          <h4 className="font-bold text-large">{product.producto.nombre}</h4>
        </Skeleton>
      </CardHeader>

      <CardBody className="overflow-visible py-2 h-[300px]">
        <Skeleton isLoaded={isLoad} className="py-2 h-[300px]">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover w-full relative rounded-xl"
            src={`https://buscador.enzona.net${product.producto.urlImagen}`}
            width={"100%"}
          />
        </Skeleton>
      </CardBody>

      <CardFooter className="   bottom-0 mt-1 relative z-10">
        <div className=" w-full flex flex-col ">
          <div className=" flex justify-center">
            <Skeleton isLoaded={isLoad}>
              <Chip color="warning" variant="solid">
                {product.producto.precioUnitario} {product.moneda}
              </Chip>
            </Skeleton>
          </div>

          <div className="flex justify-between">
            <Skeleton isLoaded={isLoad}>
              <PopoverDescription descripcion={product.producto.descripcion} />
            </Skeleton>
            <Skeleton isLoaded={isLoad}>
              <Button>Ir a la Tienda</Button>
            </Skeleton>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
