'use client'

import { Image } from "@nextui-org/react"
import { useState } from "react"

export default function ProductImage({urlProducto}:{urlProducto:string}){

    const [url, setUrl] = useState<string>(urlProducto)

    return(
        <Image
        loading="eager"
        isZoomed
        alt="Card background"
        className="object-cover w-full relative rounded-xl"
        src={`${url}`}
        width={"100%"}
        height={100}
        onError={()=>{
            setUrl("/sinimagen.jpg")
        }}
      />
    )
}