'use strict';
module.exports = (sequelize, DataTypes) => {
  var Asesoria = sequelize.define('Asesoria', {
    fecha:{
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    url_avance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {msg: 'La url del avance es obligatoria.'}
      }
    },
    temas_a_asesorar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Debe indicar los temas a asesorar.'}
      }
    }
  });
  Asesoria.associate = (models) => {
    Asesoria.belongsTo(models.Proyecto, {
      foreignKey: 'id_proyecto',
      onDelete: 'CASCADE',
      as: 'proyecto'
    })
    Asesoria.belongsTo(models.Proyecto, {
      foreignKey: 'id_asesor_interno',
      onDelete: 'CASCADE',
      as: 'asesor_interno'
    })

    Asesoria.hasMany(models.solucion_recomendada, {
      foreignKey: 'id_asesoria',
      as: 'asesorias'
    })
  }
  return Asesoria;
};