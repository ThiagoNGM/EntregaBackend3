# Imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto (debe coincidir con el que usa tu app)
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "start"]
