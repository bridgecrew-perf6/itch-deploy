'use strict';
const bCrypt = require('bcrypt-nodejs');
const generateHash = (contrasenia) => {
  return bCrypt.hashSync(contrasenia, bCrypt.genSaltSync(8), null);
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Usuarios', [{
        correo: '00fblanco@gmail.com',
        isAdmin: true,
        contrasenia: generateHash('123456'),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
