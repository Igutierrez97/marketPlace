import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Agent } from "https";
import { getAccesToken } from "../services/getAccesToken";
import { ultimaPalabra } from "../utilities/ultimaPalabra";

const instanciaAxios = axios.create({
  httpsAgent: new Agent({
    rejectUnauthorized: false, // Deshabilitar temporalmente la verificación del certificado SSL/TLS
  }),
});

const url = "https://apiez.enzona.net/buscador/v1/boulevard/filter";

export async function GET(request: NextRequest) {
  const accessToken = await getAccesToken();

  const searchParams = request.nextUrl.searchParams;
  const moneda = searchParams.get("moneda");
  const provincia = searchParams.get("provincia");
  const municipio = searchParams.get("municipio");
  const max_price = searchParams.get("max_price");
  const min_price = searchParams.get("min_price");
  const page = searchParams.get("page");

  try {
    const params = new URLSearchParams();
    params.set("count", "48");

    if (moneda) {
      params.set("moneda", moneda);
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

    if (max_price !== null) {
      params.set("max_price", max_price);
    }
    if (min_price !== null) {
      params.set("min_price", min_price);
    }

    if (page !== null) {
      params.set("page", page);
    }

    const urlQuery = `${url}?${params.toString()}`;

    console.log(urlQuery);

    const response = await instanciaAxios.get(urlQuery, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const { data } = response;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor" },
      { status: 500 }
    );
  }
}
