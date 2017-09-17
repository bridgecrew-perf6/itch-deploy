// DATABASE
const db = require('../../config/sequelize');
const Sequelize = require('sequelize');

const Carrera = db.define('carrera', {
    nombre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: {msg: 'El campo no debe estar vacio'}
        }
    }
});

// db.sync();
const Departamento = require('./Departamento');
// Carrera.belongsTo(Departamento);


module.exports = Carrera;