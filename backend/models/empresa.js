'use strict';
module.exports = (sequelize, DataTypes) => {
  var Empresa = sequelize.define('Empresa', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    clasificacion: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['industrial','servicios','público','privado','otro']
    },
    mision: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: ''
    },
    rfc: {
      type: DataTypes.STRING,
    },
    domicilio: {
      type: DataTypes.STRING
    },
    colonia: {
      type: DataTypes.STRING
    },
    codigo_postal: {
      type: DataTypes.STRING
    },
    fax: {
      type: DataTypes.STRING
    },
    nombre_titular: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    puesto_titular: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    nombre_firma_acuerdo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    puesto_firma_acuerdo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    }
  });
  Empresa.associate = (models) => {
    Empresa.hasMany(models.asesor_externo, {
      foreignKey: 'id_empresa',
      as: 'asesor_externos'
    })
  }
  return Empresa;
};