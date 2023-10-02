import { PopoverDescription } from "@/components/popoverDescription/PopoverDescription";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";
import { Chip } from "@nextui-org/chip";

export default function Loading() {
  const arr = [0,1,2,3,4,7,8,9]
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
        {arr.map((el) => {
          return (
            <Card key={el} className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Skeleton className="pb-0 pt-2 px-4 rounded-xl">
                  <h4 className="font-bold text-large">
                    Empresa Provincial De Comercio
                  </h4>
                </Skeleton>
              </CardHeader>

              <CardBody className="overflow-visible py-2 h-[300px]">
                <Skeleton className="py-2 h-[300px] rounded-xl">
                  <Image
                    isZoomed
                    alt="Card background"
                    className="object-cover w-full relative rounded-xl"
                    src={`https://buscador.enzona.net`}
                    width={"100%"}
                  />
                </Skeleton>
              </CardBody>

              <CardFooter className="   bottom-0 mt-1 relative z-10">
                <div className=" w-full flex flex-col ">
                  <div className=" flex justify-center">
                    <Skeleton className="flex justify-center mb-3 rounded-xl w-24">
                      <Chip color="warning" variant="solid"></Chip>
                    </Skeleton>
                  </div>

                  <div className="flex justify-between">
                    <Skeleton className="rounded-xl">
                      <PopoverDescription descripcion="lol" />
                    </Skeleton>
                    <Skeleton className="rounded-xl">
                      <Button>Ir a la Tienda</Button>
                    </Skeleton>
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
