const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Bandera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Capital: {
      type: DataTypes.STRING,
      
    },
    Subregion: {
      type: DataTypes.STRING
    },
    Area: {
      type: DataTypes.FLOAT,
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};
