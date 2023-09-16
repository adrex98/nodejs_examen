// app.mjs
import express from 'express';
import morgan from 'morgan';
import { json } from 'express'; // Importa el middleware de parseo JSON directamente desde express
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

const corsOptions = {
 origin: 'http://127.0.0.1:5500',
 credentials: true,
};

//Configurar CORS
app.use(cors(corsOptions));
app.use(cookieParser());

//Import Routers
import usuariosRoutes from './routes/usuarios.routes.js'; // Importa las rutas de usuarios
import productsRoutes from './routes/products.routes.js'; // Importa las rutas de productos
import categoriesRoutes from './routes/categories.routes.js'; // Importa las rutas de las categorias

// Middlewares
app.use(json()); // Utiliza el middleware de parseo JSON incorporado en Express
app.use(morgan('combined'));

// Rutas de usuarios
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);

export default app;
