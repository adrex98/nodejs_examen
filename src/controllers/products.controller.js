import { Products } from '../models/products.js';

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

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    // Verificar si el usuario tiene permisos de administrador
    if (!esAdmin(req)) {
      return res.status(403).json({ mensaje: 'No estás autorizado para crear productos' });
    }

    const { name, unit_price, state, category_id} = req.body;
    const user_id = req.usuario.id;

    // Aquí puedes agregar la lógica para crear un nuevo producto
    const nuevoProducto = await Products.create({
      name,
      unit_price,
      state,
      category_id,
      user_id,
    });

    res.status(201).json({ mensaje: 'Producto creado con éxito', producto: nuevoProducto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
};

// Actualizar un producto por ID
export const updateProduct = async (req, res) => {
  try {
    // Verificar si el usuario tiene permisos de administrador
    if (!esAdmin(req)) {
      return res.status(403).json({ mensaje: 'No estás autorizado para actualizar productos' });
    }

    const { id } = req.params;
    const { name, unit_price, state } = req.body;

    // Aquí puedes agregar la lógica para actualizar un producto por su ID
    const productoActualizado = await Products.update(
      {
        name,
        unit_price,
        state,
      },
      {
        where: {
          id,
        },
      }
    );

    if (productoActualizado[0] === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.status(200).json({ mensaje: 'Producto actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por ID
export const deleteProduct = async (req, res) => {
  try {
    // Verificar si el usuario tiene permisos de administrador
    if (!esAdmin(req)) {
      return res.status(403).json({ mensaje: 'No estás autorizado para eliminar productos' });
    }

    const { id } = req.params;

    // Aquí puedes agregar la lógica para eliminar un producto por su ID
    const productoEliminado = await Products.destroy({
      where: {
        id,
      },
    });

    if (productoEliminado === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.status(200).json({ mensaje: 'Producto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el producto' });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findByPk(id);

    if (!product) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
};
