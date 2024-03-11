# Tarea 4 - App de Noticias

## Objetivo

El objetivo de esta práctica es desarrollar una aplicación web para listar noticias de un 3rd party.

## Requerimientos

Para correr este proyecto se require:

- nvm
- node 16.20

## Instalacion

Para comenzar, sigue estos pasos:

1. **Crear archivo .env.development**: En la raíz del proyecto, crea un archivo llamado `.env.development`. En este archivo, define las siguientes variables de entorno:

   ```plaintext
   HOST=localhost
   PORT=3000
   REACT_APP_BACK_API=http://localhost:8080/api
   REACT_APP_PUBLIC=http://localhost:8080/static

   BACK_PORT=8080
   BACK_HOST=http://localhost
   NEWS_API_KEY=832b6a0967824b35b16b7220bac67703
   NEWS_API_ENDPOINT=https://newsapi.org/v2
   DB_URI=mongodb+srv://canvas_user:canvas1234@itesoweb2.wgdzqtp.mongodb.net/tinycanvas?retryWrites=true&w=majority
   ```

   Estas variables se utilizan para configurar los puertos en el que se ejecutarán los servidors, el host local y el punto de conexión de la API externa.

2. **Usar Node 16.20**: Abre dos terminales en la raíz del proyecto y ejecuta el siguiente comando para utilizar la version correcta de Node:

   ```bash
   nvm install 16.20
   nvm use 16.20
   ```

   Esto instalara y comenzara a utilizar la version correcta del runtime.

3. **Instalar dependencias**: Abre dos terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   Terminal 1:

   ```bash
   yarn
   ```

   Terminal 2:

   ```bash
   cd backend
   yarn
   ```

   Esto instalará todas las dependencias listadas en los archivos `package.json`.

4. **Iniciar los servidores**: Una vez que las dependencias estén instaladas y utilizando las mismas dos terminales, puedes iniciar los servidores ejecutando el siguiente comando en la raiz y en la carpeta `backend`:

   ```bash
   yarn dev
   ```

   Esto ejecutará el servidor de back y el cliente de front y estará listo para manejar las solicitudes.

Ahora estás listo para comenzar a probar el wrapper de la api News.
