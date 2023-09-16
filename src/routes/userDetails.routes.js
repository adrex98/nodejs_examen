// userDetail.routes.js
import express from 'express';
import { getUserDetails } from '../controllers/userDetails.controller.js';
import { validarToken } from '../middleware/validarToken.js';

const router = express.Router();

// Ruta para obtener los detalles del usuario por su ID
router.get('/:userId', validarToken, getUserDetails);

export default router;
