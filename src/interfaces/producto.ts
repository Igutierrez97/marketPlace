export interface Producto {
    merchant_UUID: string;
    timestamp: string;
    nombre: string;
    direccion: string;
    moneda: string;
    id_shop: string;
    telefono: string;
    latitud: string;
    longitud: string;
    imagen: string;
    prioridad: number;
    provincia: string;
    latitudp: string;
    longitudp: string;
    municipio: string;
    latitudm: string;
    longitudm: string;
    url: string;
    producto: {
      nombre: string;
      descripcion: string;
      precioUnitario: number;
      rating: string;
      cantidad: number;
      codigoEAN: string;
      referencia: string;
      proveedor: string;
      fabricante: string;
      distribucion: string;
      condicion: string;
      urlImagen: string;
      url: string;
      ancho: string;
      peso: string;
      profundidad: string;
      talla: string;
      color: string[];
      fechaVencimiento: string;
      fechaFabricacion: string;
      accesorios: string;
      categoria: {
        level1: string;
        level2: string;
        level3: string;
      };
      um: string;
      minimal_quantity: string;
      minimal_quantity_convinations: string[];
      max_quantity: string;
      max_quantity_combination: string;
    };
  }
  