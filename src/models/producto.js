const { DataTypes } = require("sequelize");
const sequelize = require('./connection')

const Producto = sequelize.define("Producto"{
    nombre: {
        type: DataType.STRING,
        allowNull: false,
    },
    precio: 
});

module.exports = Producto;