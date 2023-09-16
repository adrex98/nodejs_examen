import { Router } from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controller.js';
import { validarToken } from '../middleware/validarToken.js';

const router = Router();

//Routes
router.get('/', validarToken, getProducts);

router.post('/', validarToken, createProduct);

router.put('/:id', validarToken, updateProduct);

router.delete('/:id', validarToken, deleteProduct);

router.get('/:id', validarToken, getProductById);

export default router;