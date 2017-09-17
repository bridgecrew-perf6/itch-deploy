// DATABASE
const db = require('../../config/sequelize');
const Sequelize = require('sequelize');
const Carrera = require('./Carrera');

const Departamento = db.define('departamento', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {msg: 'El campo no debe estar vacio'}
        }
    }
});
// Departamento.hasMany(Carrera);


module.exports = Departamento;