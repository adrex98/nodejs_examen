import 'dotenv/config.js';
import app from './app.js';
import { sequelize } from './config/database.js';

async function main() {
  console.clear();
  const port = process.env.PORT;

  try {
    // Puedes realizar configuraciones adicionales antes de iniciar el servidor aquí, si es necesario.
    await sequelize.sync({force: false}); //Cambiar el valor de falso a verdadero para crear la BD por primera vez.
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`);
  }
}

main();
