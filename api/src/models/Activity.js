const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
            defaultValue: UUIDV4
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        Duracion: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        Temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        }

    }, {
       timestamps: false
   } ) 
}