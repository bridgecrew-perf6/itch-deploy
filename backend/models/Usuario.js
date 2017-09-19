'use strict';
const bCrypt = require('bcrypt-nodejs');

const generateHash = (contrasenia) => {
  return bCrypt.hashSync(contrasenia, bCrypt.genSaltSync(8), null);
}
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    correo:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: {msg: 'Debe tener un formato de email.'},
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: {msg: 'El campo no debe estar vacio'}
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
  });
  Usuario.beforeCreate((usuario, options) => {
        usuario.contrasenia = generateHash(usuario.contrasenia);
  });
  // Usuario.belongs
  return Usuario;
};