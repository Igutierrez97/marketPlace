import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
  let arr = [1, 2, 3];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-2">
        {arr.map((el) => {
          return (
            <Card className="h-72  max-w-[750px] " shadow="sm">
              <CardBody className="p-0 grid grid-cols-3">
                <Skeleton className="flex justify-center items-center w-40">
                  <div className="flex justify-center items-center bg-cyan-400">
                    <Image className="w-40" src={"#"} />
                  </div>
                </Skeleton>

                <div className="flex justify-center items-center col-span-2 ">
                  <div className="mt-5 mx-5 ">
                    <Skeleton className="my-1 rounded-xl">
                      <strong>############</strong>
                    </Skeleton>

                    <Skeleton className="my-1 rounded-xl">
                      <div>Municipio: ############</div>
                    </Skeleton>

                    <Skeleton className="my-1 rounded-xl">
                      <div>Direcion: ###########</div>
                    </Skeleton>

                    <Skeleton className="my-3  rounded-2xl">
                      <div className="flex justify-center mt-2">
                        <Button color="primary" href="#">
                          Ir a la tienda
                        </Button>
                      </div>
                    </Skeleton>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}
