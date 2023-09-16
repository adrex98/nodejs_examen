// userDetails.controller.js
import { Usuario } from '../models/usuarios.js'; // Asegúrate de importar tu modelo de usuarios
import { Categories } from '../models/categories.js'; // Asegúrate de importar tu modelo de categorías
import { Products } from '../models/products.js'; // Asegúrate de importar tu modelo de productos

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId; // Obtiene el ID del usuario de los parámetros

    // Busca el usuario por su ID junto con las categorías y productos asociados
    const userDetails = await Usuario.findOne({
      where: { id: userId },
      include: [
        {
          model: Categories,
          attributes: ['id', 'name'], // Puedes seleccionar los atributos que deseas mostrar
        },
        {
          model: Products,
          attributes: ['id', 'name', 'unit_price'], // Puedes seleccionar los atributos que deseas mostrar
        },
      ],
    });

    if (!userDetails) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({ mensaje: 'Detalles del usuario obtenidos con éxito', usuario: userDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los detalles del usuario' });
  }
};