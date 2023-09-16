// models/usuarios.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Categories } from './categories.js';
import Products from './products.js';
import bcrypt from 'bcrypt';

export const Usuario = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'usuario',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    
});

Usuario.hasMany(Categories, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

Categories.belongsTo(Usuario, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

Usuario.hasMany(Products, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

Products.belongsTo(Usuario, {
  foreignKey: 'user_id',
  targetKey: 'id',
});

// Método para comparar contraseñas con bcrypt
Usuario.prototype.validarContrasena = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default Usuario;