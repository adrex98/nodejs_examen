import { Sequelize } from 'sequelize';
import 'dotenv/config.js';

// const db = new Sequelize({
//   dialect: 'postgres',
//   username: 'postgres',
//   password: 'admin1234',
//   host: 'localhost', // Puedes cambiarlo según la ubicación de tu base de datos
//   port: 5432, // Puerto por defecto de PostgreSQL
//   database: 'm4_examen',
// });

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

export const sequelize = new Sequelize(

  db_name, // db_name
  db_user, //username
  db_password, // password
  {
    host: db_host,
    dialect: 'postgres',
  }

);
// export default db;
