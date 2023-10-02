import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

import { Producto } from "@/interfaces/producto";
import { PopoverDescription } from "../popoverDescription/PopoverDescription";
import ProductImage from "./ProductImage";
import { Link } from "@nextui-org/link";

export default function ProductsCard({ product }: { product: Producto }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{product.producto.nombre}</h4>
      </CardHeader>

      <CardBody className="overflow-visible py-2 h-[300px]">
        <ProductImage
          urlProducto={`https://buscador.enzona.net${product.producto.urlImagen}`}
        />
      </CardBody>

      <CardFooter className="   bottom-0 mt-1 relative z-10">
        <div className=" w-full flex flex-col ">
          <div className=" flex justify-center">
            <Chip color="warning" variant="solid">
              {product.producto.precioUnitario} {product.moneda}
            </Chip>
          </div>

          <div className="flex justify-between">
            <PopoverDescription descripcion={product.producto.descripcion} />

            <Button as={Link} isExternal href={product.producto.url}>
              Ver en la tienda
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
