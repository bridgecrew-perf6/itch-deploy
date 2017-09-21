'use strict';
module.exports = (sequelize, DataTypes) => {
  var asesor_externo = sequelize.define('asesor_externo', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    puesto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    }
  });
  asesor_externo.associate = (models) => {
    asesor_externo.belongsTo(models.Empresa, {
      foreignKey: 'id_empresa',
      onDelete: 'CASCADE'
    });
    asesor_externo.hasMany(models.Anteproyecto, {
      foreignKey: 'id_asesor_externo',
      as: 'anteproyectos'
    })
  }
  return asesor_interno;
};