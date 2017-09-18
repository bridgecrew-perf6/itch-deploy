'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    nombre:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {msg: 'El campo no debe estar vacio'}
        }
    }
  });
  // relaciones
  Departamento.associate = (models) => {
    Departamento.hasMany(models.Carrera, {
      foreignKey: 'departamentoId',
      as: 'carreras'
    })
  }
  return Departamento;
};