Este proyecto es una API REST creada con Node.js que permite gestionar adopciones de mascotas. Está pensada para ser ejecutada fácilmente mediante Docker.

Antes de comenzar necesitás instalar:

1 Docker Desktop

Descargá e instalá Docker desde la página oficial:  
https://www.docker.com/products/docker-desktop/

Despues, abrí Docker Desktop y asegurate de que esté corriendo.


Cómo iniciar el proyecto

Paso 1: Descargar la imagen del proyecto

Abrí una terminal y ejecutá:

docker pull thiagogm07/entrega-final

Paso 2: Ejecuta la aplicación

en la misma terminal, ejecutá: docker run -p 8080:8080 -e MONGO_URL=mongodb://host.docker.internal:27017/entregaBackend3 thiagongm/entregabackend3

paso 3: Acceder a la aplicación:

cuando ya se esta ejecutando, podes acceder a la documentacion de swagger usando la siguiente url: http://localhost:8080/docs/

Aqui podras probar todos los endpoints del sistema