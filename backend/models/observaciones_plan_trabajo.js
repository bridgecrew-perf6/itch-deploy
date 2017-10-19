'use strict';
module.exports = (sequelize, DataTypes) => {
  var observaciones_plan_trabajo = sequelize.define('observaciones_plan_trabajo', {
    observacion:{
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    solucionada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  observaciones_plan_trabajo.associate = (models) => {
    observaciones_plan_trabajo.belongsTo(models.Proyecto, {
      foreignKey: 'id_proyecto',
      onDelete: 'CASCADE',
      as: 'proyecto'
    });
    observaciones_plan_trabajo.belongsTo(models.Docente, {
      foreignKey: 'id_asesor_externo',
      onDelete: 'CASCADE',
      as: 'asesor_interno'
    });
  }
  return observaciones_plan_trabajo;
};