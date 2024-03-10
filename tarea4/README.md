# Tarea 4 - App de Noticias

El objetivo de esta práctica es desarrollar una aplicación web para listar noticias de un 3rd party.

Para comenzar, sigue estos pasos:

1. **Crear archivo .env**: En la raíz del proyecto, crea un archivo llamado `.env`. En este archivo, define las siguientes variables de entorno:

   ```plaintext
   PORT=8080
   HOST=http://localhost
   API_ENDPOINT=https://jsonplaceholder.typicode.com
   ```

   Estas variables se utilizan para configurar el puerto en el que se ejecutará el servidor, el host local y el punto de conexión de la API externa.

2. **Instalar dependencias**: Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm i
   ```

   Esto instalará todas las dependencias listadas en el archivo `package.json`.

3. **Iniciar el servidor**: Una vez que las dependencias estén instaladas, puedes iniciar el servidor ejecutando el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto ejecutará el servidor y estará listo para manejar las solicitudes.

Ahora estás listo para comenzar a probar la API CRUD utilizando las variables de entorno proporcionadas en el archivo `.env`.
