'use strict';
module.exports = (sequelize, DataTypes) => {
  var observaciones_cronograma = sequelize.define('observaciones_cronograma', {
    
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
  observaciones_cronograma.associate = (models) =>{
    observaciones_cronograma.belongsTo(models.Proyecto, {
      foreignKey: 'id_proyecto',
      onDelete: 'CASCADE',
      as: 'proyecto'
    });
    observaciones_cronograma.belongsTo(models.Docente, {
      foreignKey: 'id_asesor_externo',
      onDelete: 'CASCADE',
      as: 'asesor_interno'
    });
  }
  return observaciones_cronograma;
};