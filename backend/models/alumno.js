'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alumno = sequelize.define('Alumno', {
    no_control: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: 'El numero de control debe ser numerico'},
        notEmpty: {msg: 'El campo no debe estar vacio'},
        len: [8,8]
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {msg: 'Debe contener solo letras'},
        notEmpty: {msg: 'El campo no debe estar vacio'},
      }
    },
    ap_paterno: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {msg: 'Debe contener solo letras'},
        notEmpty: {msg: 'El campo no debe estar vacio'},
      }
    },
    ap_materno: {
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        isAlpha: {msg: 'Debe contener solo letras'},
        notEmpty: {msg: 'El campo no debe estar vacio'},
      }
    },
    sexo: {
      type: DataTypes.ENUM,
      values: ['H', 'M']
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
    ciudad: {
      type: DataTypes.STRING
    },
    no_seguro: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        isNumeric: {msg: 'Deben ser solo letras '},
        notEmpty: {msg: 'El número de seguro es obligatorio'}
      }
    },
    numero_celular: {
      type: DataTypes.STRING
    }
  });
  Alumno.associate = (models) => {
    Alumno.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      onDelete: 'CASCADE'
    });
    Alumno.belongsTo(models.tipo_seguro, {
      foreignKey: 'id_tipo_seguro',
      onDelete: 'CASCADE'
    });
    Alumno.belongsTo(models.Carrera, {
      foreignKey: 'id_carrera',
      onDelete: 'CASCADE'
    })
  }
  return Alumno;
};