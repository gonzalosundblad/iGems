const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('gem', {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        link: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.INTEGER
        }
    }
)};
