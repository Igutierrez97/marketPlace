# Utiliza una imagen de Node.js como base
FROM node:14-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto a la imagen
COPY . .

# Instala las dependencias
RUN npm install --production

# Compila la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Define el comando de inicio de la aplicación
CMD ["npm", "start"]
