import 'dotenv/config.js';
import app from './app.js';
import { sequelize } from './config/database.js';

async function main() {
  console.clear();
  const port = process.env.PORT;

  try {
    // Puedes realizar configuraciones adicionales antes de iniciar el servidor aquí, si es necesario.
    await sequelize.sync({force: false}); //change false to true, to create for the first time the DB.
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
  }
}

main();
