import { Router } from 'express';
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controllers/categories.controller.js';
import { validarToken } from '../middleware/validarToken.js';

const router = Router();

//Routes
router.get('/', validarToken, getCategories);

router.post('/', validarToken, createCategory);

router.put('/:id', validarToken, updateCategory);

router.delete('/:id', validarToken, deleteCategory);

router.get('/:id', validarToken, getCategoryById);

export default router;