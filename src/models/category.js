const { DataTypes } = require("sequelize");
const sequelize = require('./connection')

const category = sequelize.define(
    "category",{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});




module.exports = category;