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
    },
    correo:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: {msg: 'Debe tener un formato de correo electronico.'},
          notEmpty: {msg: 'El campo debe tener un valor'}
      }
    }
  });
  asesor_externo.associate = (models) => {
    asesor_externo.belongsTo(models.Empresa, {
      foreignKey: 'id_empresa',
      onDelete: 'CASCADE',
      as: 'empresa'
    });
    asesor_externo.hasMany(models.Anteproyecto, {
      foreignKey: 'id_asesor_externo',
      as: 'anteproyectos'
    })
  }
  return asesor_externo;
};