'use strict';
module.exports = (sequelize, DataTypes) => {
  var Proyecto = sequelize.define('Proyecto', {
    filename_plan_trabajo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aprobacion_plan_trabajo:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    filename_cronograma: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aprobacion_cronograma:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  Proyecto.associate = (models) => {
    Proyecto.belongsTo(models.Anteproyecto, {
      foreignKey: 'id_anteproyecto',
      onDelete: 'CASCADE',
      as: 'anteproyecto'
    })

    Proyecto.hasMany(models.Asesoria, {
      foreignKey: 'id_proyecto',
      as: 'asesorias'
    })
    Proyecto.hasMany(models.seguimiento_proyecto, {
      foreignKey: 'id_proyecto',
      as: 'seguimientos_proyecto'
    })
  }
  return Proyecto;
};