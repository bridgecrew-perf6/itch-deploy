'use strict';
module.exports = (sequelize, DataTypes) => {
  var Anteproyecto = sequelize.define('Anteproyecto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'El anteproyecto debe tener un nombre'}
      }
    },
    objetivo_general: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'El antrpoyecto debe tener un nombre'}
      }
    },
    dictamen:{
      type: DataTypes.ENUM,
      values: ['aprobado','no aprobado'],
      allowNull: false,
      defaultValue: 'no aprobado'
    }
  });
  Anteproyecto.associate = (models) => {
    Anteproyecto.hasOne(models.Alumno, {
      foreignKey: 'id_alumno',
      onDelete: 'CASCADE'
    });
    Anteproyecto.hasOne(models.Periodo, {
      foreignKey: 'id_periodo',
      onDelete: 'CASCADE'
    });
    Anteproyecto.belongsTo(models.asesor_externo, {
      foreignKey: 'id_asesor_externo',
      onDelete: 'CASCADE'
    })
  }
  return Anteproyecto;
};