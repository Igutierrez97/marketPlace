export function ultimaPalabra(str:string) {
    if (!str) {
      return "";
    }
    const palabras = str.trim().split(" ");
    return palabras[palabras.length - 1];
  }
  
  