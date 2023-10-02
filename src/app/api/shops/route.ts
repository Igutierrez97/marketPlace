import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Agent } from "https";
import { getAccesToken } from "../services/getAccesToken";
import { ultimaPalabra } from "../utilities/ultimaPalabra";
import { Shop } from "@/interfaces/shops/shops";



const instanciaAxios = axios.create({
  httpsAgent: new Agent({
    rejectUnauthorized: false, // Deshabilitar temporalmente la verificación del certificado SSL/TLS
  }),
});

const url = "https://apiez.enzona.net/buscador/v1/boulevard/filterShop";

export async function GET(request: NextRequest) {
  const accessToken = await getAccesToken();

  const searchParams = request.nextUrl.searchParams;
  const moneda = searchParams.get("moneda");
  const provincia = searchParams.get("provincia");
  const municipio = searchParams.get("municipio");
  const name = searchParams.get("name");

  try {
    const params = new URLSearchParams();

    if (moneda && moneda !== "USDCUP" ) {
      params.set("moneda", moneda);
   }
    if (name) {
      params.set("name", name);
    }

    if (provincia) {
      provincia === "Todas las Provincias"
        ? params.set("provincia", "")
        : params.set("provincia", ultimaPalabra(provincia.toString()));
    }

    if (municipio) {
      municipio === "Todos los municipios de la Provincia"
        ? params.set("municipio", "")
        : params.set("municipio", ultimaPalabra(municipio.toString()));
    }
    const urlQuery = `${url}?${params.toString()}`;
    console.log(urlQuery);

    const response = await instanciaAxios.get(urlQuery, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data }:{data:Shop[]} = response;
    
    return NextResponse.json({ data }, { status: 200 }, );
  } catch (error) {
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor" },
      { status: 500 }
    );
  }
}
