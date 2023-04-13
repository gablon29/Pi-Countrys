const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            validate: {
                isTime: (value) => {
                    if (value && !/^\d{2}:\d{2}:00$/.test(value)) {
                        throw new Error('El valor debe ser en formato HH:mm')
                    }

                }
            }
        },
        Temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        }

   } ) 
}