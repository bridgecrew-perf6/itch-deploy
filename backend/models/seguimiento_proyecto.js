'use strict';
module.exports = (sequelize, DataTypes) => {
  var seguimiento_proyecto = sequelize.define('seguimiento_proyecto', {
    url_seguimiento: {
      type: DataTypes.STRING(300),
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Debe indicar la url del seguimiento'}
      }
    }
  });
  seguimiento_proyecto.associate = (models) => {
    seguimiento_proyecto.belogsTo(models.Seguimiento, {
      foreignKey: 'id_seguimiento',
      onDelete: 'CASCADE',
      as: 'seguimiento'
    })
    seguimiento_proyecto.belogsTo(models.Proyecto, {
      foreignKey: 'id_proyecto',
      onDelete: 'CASCADE',
      as: 'proyecto'
    })

  }

  return seguimiento_proyecto;
};