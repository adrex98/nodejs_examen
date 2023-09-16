# Node.JS Project

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

## Endpoints de la API

- `/api/usuarios`: Endpoint para gestionar usuarios.
- `/api/products`: Endpoint para gestionar productos.
- `/api/categories`: Endpoint para gestionar categorías.
- `/api/userDetails/`: Endpoint para recopilar los productos y categorias creado por un usuario en especifico.

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

#### Obtener Todos los Usuarios (Requiere JWT)

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

```bash
GET /api/products
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/products
```

#### Obtener Detalles de un Producto (Requiere JWT)
\
Para obtener los detalles de un producto por su ID, realiza una solicitud GET a la siguiente URL, reemplazando ID_DEL_PRODUCTO con el ID del producto:

```bash
GET /api/products/ID_DEL_PRODUCTO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/products/ID_DEL_PRODUCTO
```

#### Actualizar un Producto (Requiere JWT)

Para actualizar los datos de un producto, realiza una solicitud PUT a la siguiente URL, reemplazando ID_DEL_PRODUCTO con el ID del producto:

```bash
PUT /api/products/ID_DEL_PRODUCTO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X PUT -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" -H "Content-Type: application/json" -d '{
  "name": "Nuevo Nombre de Producto",
  "unit_price": 150
}' http://localhost:PUERTO/api/products/ID_DEL_PRODUCTO
```

Recuerda reemplazar PUERTO, TU_JWT y VALOR_DE_LA_COOKIE con los valores adecuados.

### Gestión de Categorías

#### Crear una Nueva Categoría (Requiere JWT)

Para crear una nueva categoría, realiza una solicitud POST a la siguiente URL:

```bash
POST /api/categories
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X POST -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" -H "Content-Type: application/json" -d '{
  "name": "Nombre de la Categoría"
}' http://localhost:PUERTO/api/categories
```

#### Obtener Todas las Categorías (Requiere JWT)

Para obtener todas las categorías, realiza una solicitud GET a la siguiente URL:

```bash
GET /api/categories
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/categories
```

#### Obtener Detalles de una Categoría (Requiere JWT)

Para obtener los detalles de una categoría por su ID, realiza una solicitud GET a la siguiente URL, reemplazando ID_DE_LA_CATEGORÍA con el ID de la categoría:

```bash
GET /api/categories/ID_DE_LA_CATEGORÍA
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/categories/ID_DE_LA_CATEGORÍA
```

#### Actualizar una Categoría (Requiere JWT)

Para actualizar los datos de una categoría, realiza una solicitud PUT a la siguiente URL, reemplazando ID_DE_LA_CATEGORÍA con el ID de la categoría:

```bash
PUT /api/categories/ID_DE_LA_CATEGORÍA
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X PUT -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" -H "Content-Type: application/json" -d '{
  "name": "Nuevo Nombre de Categoría"
}' http://localhost:PUERTO/api/categories/ID_DE_LA_CATEGORÍA
```

#### Eliminar una Categoría (Requiere JWT)

Para eliminar una categoría, realiza una solicitud DELETE a la siguiente URL, reemplazando ID_DE_LA_CATEGORÍA con el ID de la categoría:

```bash
DELETE /api/categories/ID_DE_LA_CATEGORÍA
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -X DELETE -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/categories/ID_DE_LA_CATEGORÍA
```

Asegúrate de reemplazar PUERTO, TU_JWT y VALOR_DE_LA_COOKIE con los valores adecuados en cada solicitud.

### Gestión de UserDetails

#### Obtener Categorías y Productos de un Usuario (Requiere JWT)

Para obtener todas las categorías y productos creados por un usuario específico, realiza una solicitud GET a la siguiente URL, reemplazando ID_DEL_USUARIO con el ID del usuario:

```bash
GET /api/userDetails/ID_DEL_USUARIO
```

Ejemplo de solicitud utilizando cURL (requiere JWT y cookie de sesión):

```bash
curl -H "Authorization: Bearer TU_JWT" -b "tu_cookie=VALOR_DE_LA_COOKIE" http://localhost:PUERTO/api/userDetails/ID_DEL_USUARIO
```

Asegúrate de reemplazar PUERTO, TU_JWT y VALOR_DE_LA_COOKIE con los valores adecuados en cada solicitud.

Esta solicitud devolverá los detalles del usuario, incluyendo todas las categorías y productos que ha creado. La respuesta incluirá la información de las categorías y productos, como sus nombres, precios, etc.

La función getUserDetails en el controlador userDetails.controller.js se encargará de buscar al usuario por su ID y recuperar las categorías y productos asociados a él.

## Base de Datos

Este proyecto utiliza PostgreSQL como base de datos. Asegúrate de haber configurado correctamente la base de datos y aplicado las migraciones antes de ejecutar la aplicación.

## View de la BD

![Captura de Pantalla 1](https://i.imgur.com/KB5IKRW.png)


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
