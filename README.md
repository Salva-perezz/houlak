Hola! Mi nombre es Salvador y este es mi challenge a continuación voy a dejar instrucciones para levantar la app correctamente

1- Posicionarse sobre la carpeta "back" en consola y ejecutar el comando "npm install" hacer los mismo en la carpeta "front"

2- Para levantar el backend vas a necesitar crear un archivo llamado ".env" en la carpeta ./back con la siguiente información:
        DB_NAME="NOMBRE_DATABASE"
        DB_USER="USUARIO_DATABASE"
        DB_PASSWORD="CONTRASEÑA_DATABASE"

        SPOTIFY_CLIENT_ID="CLIENT_ID_SPOTIFYAPP"
        SPOTIFY_CLIENT_SECRET="CLIENT_SECRET_SPOTIFYAPP"

        PORT=3001 *En caso de querer usar otro puerto que no sea el indicado se debe cambiar tambien en el archivo ./front/src/axios/index.js al puerto correspondiente*

    En caso de no contar con el client_id y client_secret de spotify pueden usar los que les dejo en el Email. La base de datos usada es PostgreSQL, en caso de querer usar otra se va a tener que cambiar
    la configuracion en el archivo ./back/dbConnection/index.js con la adecuada, aca (https://sequelize.org/docs/v6/getting-started/) les dejo la documentacion de sequelize que refiere a la configuración
    para conectar la base de datos. Quiero aclarar tambien que lo unico que tienen que hacer es crear la base de datos localmente y conectarla, la app al iniciarse le va a crear la tabla "requests" automaticamente.

3- Una vez hecho esto se deben posicionar con una consola sobre la carpeta ./back y ejecutar el comando "npm start" abrir una consola nueva y repetir el mismo proceso en la carpeta ./front, importante
seguir el orden indicado. Una vez hecho esto la aplicación deberia levantarse sin problemas, en el caso de que los haya, no duden en contactarse conmigo.

DEPENDECIAS USADA: 
    Backend:
        - Express
        - Sequelize
        - pg
        - pg-hstore
        - Cors
        - Request
        - Spotify-web-api-node
        - Dotenv
        - Nodemon
    
    Frontend:
        - React
        - Redux
        - React-redux
        - Axios
        - React-bootstrap
        - @reduxjs/toolkit