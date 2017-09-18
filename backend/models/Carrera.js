'use strict';
module.exports = (sequelize, DataTypes) => {
  const Carrera = sequelize.define('Carrera', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {msg: 'El campo no debe estar vacio'}
        }
    }
  });
  Carrera.associate = (models) => {
    Carrera.belongsTo(models.Departamento, {
      foreignKey: 'departamentoId',
      onDelete: 'CASCADE'
    });
  }
  return Carrera;
};