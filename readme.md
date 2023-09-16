# Nombre del Proyecto

## Descripción

El proyecto [nombre del proyecto] es una aplicación web basada en Node.js que proporciona una plataforma para gestionar usuarios, categorías y productos. La aplicación sigue la estructura mostrada en la imagen adjunta y cumple con los siguientes requerimientos:

- **Autenticación de Usuarios:** La aplicación permite a los usuarios registrarse, iniciar sesión y obtener un JWT (JSON Web Token) después de la autenticación.

- **Gestión de Usuarios:**
  - **CRUD de Usuarios:** Los usuarios pueden realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en su perfil de usuario.
  
- **Gestión de Categorías:**
  - **CRUD de Categorías:** Los usuarios autenticados pueden realizar operaciones CRUD en categorías.
  
- **Gestión de Productos:**
  - **CRUD de Productos:** Los usuarios autenticados pueden realizar operaciones CRUD en productos.
  
- **API para Detalles del Usuario:**
  - **Obtener Categorías y Productos:** Se ha implementado una API que permite obtener todas las categorías y productos que un usuario ha creado, proporcionando su identificador como parámetro. Esta API requiere un JWT válido para autorizar la solicitud.

## Características Principales

- Autenticación de Usuarios con JWT.
- CRUD de Usuarios, Categorías y Productos.
- API para obtener las creaciones de un usuario.
- Estructura de la aplicación conforme a la imagen adjunta.

## Capturas de Pantalla

![Captura de Pantalla 1](https://imgur.com/a/Xerby75)


## Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JSON Web Tokens (JWT)

## Configuración del Entorno

Asegúrate de tener Node.js y PostgreSQL instalados en tu sistema.

### Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea una base de datos PostgreSQL y llamala como gustes.
4. Copia el archivo `.env.example` a `.env` y configura las variables de entorno necesarias, como las credenciales de la base de datos.
5. Ejecuta `npm run migrate` para aplicar las migraciones a la base de datos.
6. Ejecuta `npm start` para iniciar la aplicación.

### Configuración del archivo .env

Este proyecto utiliza un archivo `.env` para almacenar variables de entorno sensibles. Debes crear este archivo y configurar las siguientes variables:

- `PORT`: El puerto en el que se ejecutará la aplicación.
- `SECRET_KEY`: Una clave secreta para la autenticación.
- `DB_NAME`: El nombre de la base de datos PostgreSQL.
- `DB_USERNAME`: El nombre de usuario de PostgreSQL.
- `DB_PASSWORD`: La contraseña de PostgreSQL.
- `DB_HOST`: La dirección del host de PostgreSQL.
- `CORS_HOST`: El host permitido para las solicitudes CORS.

Asegúrate de copiar el archivo `.env.example` a `.env` y configurar estas variables con los valores adecuados. Aquí tienes un ejemplo:

```env
PORT=3000
SECRET_KEY=mi_clave_secreta
DB_NAME=mi_basededatos
DB_USERNAME=mi_usuario
DB_PASSWORD=mi_contraseña
DB_HOST=localhost
CORS_HOST=http://localhost:3000
```

## Uso

A continuación, se describen los pasos para utilizar la API y se proporcionan ejemplos de comandos y código para cada uno de los endpoints.

### Autenticación de Usuarios

#### Registro de un Nuevo Usuario

Para registrar un nuevo usuario, realiza una solicitud POST a la siguiente URL:

Ejemplo de solicitud utilizando cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Nombre del Usuario",
  "email": "correo@ejemplo.com",
  "password": "contraseña"
}' http://localhost:PUERTO/api/usuarios/registrar
```
### Iniciar Sesion 

Para iniciar sesión y obtener un JWT (JSON Web Token) y una cookie de sesión, realiza una solicitud POST a la siguiente URL:

```bash
POST /api/usuarios/login
```
Ejemplo de solicitud utilizando cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "correo@ejemplo.com",
  "password": "contraseña"
}' http://localhost:PUERTO/api/usuarios/login

```
### Gestion de Usuarios

Obtener Todos los Usuarios (Requiere JWT)
Para obtener todos los usuarios registrados, realiza una solicitud GET a la siguiente URL:

```bash
GET /api/usuarios
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/usuarios

```
#### Obtener Detalles de un Usuario (Requiere JWT)

Para obtener los detalles de un usuario por su ID, realiza una solicitud GET a la siguiente URL, reemplazando ID_DEL_USUARIO con el ID del usuario:

```bash
GET /api/usuarios/ID_DEL_USUARIO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/usuarios/ID_DEL_USUARIO
```

#### Actualizar un Usuario (Requiere JWT)

Para actualizar los datos de un usuario, realiza una solicitud PUT a la siguiente URL, reemplazando ID_DEL_USUARIO con el ID del usuario:

```bash
PUT /api/usuarios/ID_DEL_USUARIO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X PUT -H "Authorization: Bearer TU_JWT" -H "Content-Type: application/json" -d '{
  "name": "Nuevo Nombre",
  "email": "nuevo_correo@ejemplo.com"
}' http://localhost:PUERTO/api/usuarios/ID_DEL_USUARIO
```

#### Eliminar un Usuario (Requiere JWT)

Para eliminar un usuario, realiza una solicitud DELETE a la siguiente URL, reemplazando ID_DEL_USUARIO con el ID del usuario:

```bash
DELETE /api/usuarios/ID_DEL_USUARIO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X DELETE -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/usuarios/ID_DEL_USUARIO
```

### Gestion de Productos

#### Crear un Nuevo Producto (Requiere JWT)

Crear un Nuevo Producto (Requiere JWT)

```bash
POST /api/products
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X POST -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" -H "Content-Type: application/json" -d '{
  "name": "Nombre del Producto",
  "unit_price": 100
}' http://localhost:PUERTO/api/products
```

#### Obtener Todos los Productos (Requiere JWT)

Para obtener todos los productos, realiza una solicitud GET a la siguiente URL:

## Endpoints de la API

- `/api/usuarios`: Endpoint para gestionar usuarios.
- `/api/products`: Endpoint para gestionar productos.
- `/api/categories`: Endpoint para gestionar categorías.

## Base de Datos

Este proyecto utiliza PostgreSQL como base de datos. Asegúrate de haber configurado correctamente la base de datos y aplicado las migraciones antes de ejecutar la aplicación.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request en este repositorio.

## Autor

- Adrian Victor Montesinos Salinas
- Contacto: adrianmontesinos98@gmail.com
