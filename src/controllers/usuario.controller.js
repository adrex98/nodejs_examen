import Usuario from '../models/usuarios.js';
import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_KEY || 'your-secret-key';
import bcrypt from 'bcrypt';

// Controlador para registrar un nuevo usuario
export const registrarUsuario = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
      return res.status(409).json({ mensaje: 'El correo ya está registrado' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const nuevoUsuario = await Usuario.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign(
      {
        id: nuevoUsuario.id,
        name,
        email,
        role,
      },
      secretKey
    );

    res.status(201).json({
      mensaje: 'Usuario registrado con éxito',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario' });
  }
};

// Controlador para iniciar sesión y obtener un JWT
export const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !usuario.validarContrasena(password)) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      { 
        id: usuario.id,
        name: usuario.name,
        email,
        role: usuario.role, 
      },
      secretKey
    );

    res.cookie('jwt',token, {
      httpOnly: true,
    })
    res.json({ mensaje: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el inicio de sesión' });
  }
};

// Obtener todos los usuarios
export const getUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
};

// Actualizar un usuario por ID
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    usuario.name = name;
    usuario.email = email;
    usuario.password = password; // Puedes agregar lógica adicional para actualizar la contraseña si es necesario
    usuario.role = role;

    await usuario.save();

    res.status(200).json({ mensaje: 'Usuario actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por ID
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    await usuario.destroy();

    res.status(200).json({ mensaje: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
};

// Obtener un usuario por ID
export const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el usuario' });
  }
};