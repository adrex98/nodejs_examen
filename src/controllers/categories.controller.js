import { Categories } from '../models/categories.js';

// Función para verificar si un usuario tiene permisos de administrador
const esAdmin = (req) => {
    // El token JWT se almacena información sobre el rol del usuario
    const usuario = req.usuario; // Aquí se extrae la información del usuario del token
  
    // Verificar si el usuario tiene permisos de administrador
    if (usuario && usuario.role === 'admin') {
      return true;
    }
    return false;
  };
  
  
// Obtener todas las categorías
export const getCategories = async (req, res) => {
    try {
      const categories = await Categories.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener las categorías' });
    }
  };
  
  // Crear una nueva categoría
  export const createCategory = async (req, res) => {
    try {
      // Verificar si el usuario tiene permisos de administrador
      if (!esAdmin(req)) {
        return res.status(403).json({ mensaje: 'No estás autorizado para crear categorías' });
      }
  
      const { name } = req.body;
      const user_id = req.usuario.id;
  
      const newCategory = await Categories.create(
        { 
          name,
          user_id,       
        });
  
      res.status(201).json({ mensaje: 'Categoría creada con éxito', category: newCategory });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear la categoría' });
    }
  };
  
  // Actualizar una categoría por ID
  export const updateCategory = async (req, res) => {
    try {
      // Verificar si el usuario tiene permisos de administrador
      if (!esAdmin(req)) {
        return res.status(403).json({ mensaje: 'No estás autorizado para actualizar categorías' });
      }
  
      const { id } = req.params;
      const { name } = req.body;
  
      const category = await Categories.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  
      category.name = name;
      await category.save();
  
      res.status(200).json({ mensaje: 'Categoría actualizada con éxito', category });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar la categoría' });
    }
  };
  
  // Eliminar una categoría por ID
  export const deleteCategory = async (req, res) => {
    try {
      // Verificar si el usuario tiene permisos de administrador
      if (!esAdmin(req)) {
        return res.status(403).json({ mensaje: 'No estás autorizado para eliminar categorías' });
      }
  
      const { id } = req.params;
  
      const category = await Categories.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  
      await category.destroy();
  
      res.status(200).json({ mensaje: 'Categoría eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la categoría' });
    }
  };

  // Obtener una categoría por ID
export const getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const category = await Categories.findByPk(id);
  
      if (!category) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
  
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la categoría' });
    }
  };
  