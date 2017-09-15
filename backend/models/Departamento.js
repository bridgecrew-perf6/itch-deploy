// DATABASE
const db = require('../../config/sequelize');
const Sequelize = require('sequelize');

const Departamento = db.define('departamento', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Departamento;