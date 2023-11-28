const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "jepafe_cac_23573",
    "jepafe_cac_23573",
    "CaC#23573",
{
    host: "mysql-jepafe.alwaysdata.net",
    dialect: "mysql",
}
);

module.exports = sequelize;


//datos mi base de datos
//"magoxxii_test_db",
//"magoxxii",
//"C.WX96cMK#5cg6D",
//host: "mysql-magoxxii.alwaysdata.net",
