import Image from "next/image";

export default function NoResultFound( {width, height}:{width:number, height:number} ){
    return(
       <div className="flex flex-col items-center justify-center min-h-screen ">
        <Image width={width} height={height} src="/NoResultFound.png" alt="No Result Found"/>
       </div>
    )
}