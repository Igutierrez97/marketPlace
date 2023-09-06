import {Agent} from 'https'
import axios from 'axios'


const agent = new Agent({
  rejectUnauthorized: false,
});

let accessToken:string;
let accessTokenExpiration:number;
let CONSUMER_KEY: string = 'k52CaxRZxfTR48l4HHarFFbFwAoa'
let SECRET_KEY: string = 'QtiAilKQDG7SPUz7VY_KvCCpkYwa'
let TOKEN_URL:string = 'https://apiez.enzona.net/token'

 export async function getAccesToken() {
  // Si ya tenemos un token de acceso válido en caché, devolverlo
  if (accessToken && accessTokenExpiration > Date.now()) {
    return accessToken;
  }

  // Si no tenemos un token de acceso válido en caché, obtener uno nuevo
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    httpsAgent: agent, // Agrega el agente personalizado aquí
  };
  const payload = new URLSearchParams();
  payload.append("grant_type", "client_credentials");
  payload.append("scope", "");
  payload.append("client_id", CONSUMER_KEY);
  payload.append("client_secret", SECRET_KEY);

  const respuesta = await axios.post(TOKEN_URL, payload, config);

  // Almacenar el token de acceso y la fecha de expiración en caché
  accessToken = respuesta.data.access_token;
  accessTokenExpiration = Date.now() + respuesta.data.expires_in * 1000; // Convertir la duración del token a milisegundos
  
  return accessToken;
}


