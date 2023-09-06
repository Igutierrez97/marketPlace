export interface ShopsResponse {
  data: Shop[];
}

export interface Shop {
  nombre: string;
  direccion: string;
  merchant_UUID: string;
  telefono: string;
  id_shop: string;
  moneda: string;
  latitud: string;
  longitud: string;
  imagen: string;
  provincia: string;
  municipio: string;
  prioridad: number;
  latitudp: string;
  longitudp: string;
  latitudm: string;
  longitudm: string;
  url: string;
  timestamp: string;
}
