# Utiliza la imagen de Node Alpine 17
FROM node:17-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto 3000 para acceder a la aplicación de Next.js
EXPOSE 3000

# Ejecuta el comando para iniciar la aplicación de Next.js
CMD ["npm", "run", "dev"]
