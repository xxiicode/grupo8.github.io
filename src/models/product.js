const { DataTypes } = require("sequelize");
const sequelize = require('./connection')

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




module.exports = Product;