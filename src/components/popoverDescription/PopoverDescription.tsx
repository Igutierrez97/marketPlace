'use client'

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import { useState } from "react";

export function PopoverDescription({descripcion}:{descripcion:string}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Popover placement="top-start" backdrop="blur" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger>
          <Button>Descripción</Button>
        </PopoverTrigger>
        <PopoverContent >
          <div className="px-1 py-2 w-80">
            <div className="text-small font-bold">Descripción</div>
            <div className="text-tiny">{descripcion}</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
