import { DataTypes } from 'sequelize';
import { sequelize  } from '../config/database.js';
import Products from './products.js';

export const Categories = sequelize.define(
    'categories',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        timestamps: false,
    }
);

Categories.hasMany(Products, {
    foreignKey: 'category_id',
    sourceKey: 'id',
});

// Products.belongsTo(Categories, {
//     foreignKey: 'category_id',
//     targetKey: 'id',
// });

export default Categories;