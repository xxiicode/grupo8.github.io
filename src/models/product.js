const { DataTypes } = require("sequelize");
const sequelize = require('./connection')
const Category = require('./category');

const Product = sequelize.define("Product",{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});



Product.belongsTo(Category);
module.exports = Product;