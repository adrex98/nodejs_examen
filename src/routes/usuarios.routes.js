import express from 'express';
const router = express.Router();
import { registrarUsuario, iniciarSesion, getUsuario, updateUsuario, deleteUsuario, getUsuarioById} from '../controllers/usuario.controller.js';
import { validarToken } from '../middleware/validarToken.js';

// Ruta para registrar un nuevo usuario
router.post('/registrar', registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', iniciarSesion);

//Rutas Adicionales

router.get('/', validarToken, getUsuario);

router.put('/:id', validarToken, updateUsuario);

router.delete('/:id', validarToken, deleteUsuario);

router.get('/:id', validarToken, getUsuarioById);

export default router;