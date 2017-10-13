'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('asesor_externos', [
      {
        nombre: 'LIC. Norma Angélica Marino García',
        puesto: 'Psicóloga',
        correo: 'norm-arig@gmail.com',
        id_empresa: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'LIC. Inés Mondragón Pérez',
        puesto: 'Contadora',
        correo: 'i_mper@gmail.com',
        id_empresa: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'ING. Valentina Valdez Valdivia',
        puesto: 'Jefa de informatica',
        correo: 'vale-vv1@gmail.com',
        id_empresa: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'ING. Arturo Valadez López',
        puesto: 'Residente gral. De carreteras federales',
        correo: 'arturo_lop@gmail.com',
        id_empresa: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'ISC. Miguel Ángel Pineda Velázquez',
        puesto: 'Jefe de la unidad de tecnologías de la información',
        correo: 'angel.pinv@gmail.com',
        id_empresa: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'LIC. Juan Carlos Salas Gutiérrez',
        puesto: 'Jefe del departamento de recursos financieros',
        correo: 'juca-gtz@gmail.com',
        id_empresa: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'ING. José Manuel Benítez Carranza',
        puesto: 'Jefe del departamento de Informática',
        correo: 'mir1221@gmail.com',
        id_empresa: 3,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'MTRO. Sergio Brito Salas',
        puesto: 'Supervisor',
        correo: 'sbsal@gmail.com',
        id_empresa: 3,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'LIC. Ana Luz Chávez Domínguez',
        puesto: 'Contadora',
        correo: 'Anidom.10@gmail.com',
        id_empresa: 3,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'LIC. Juan Felipe Caballero Flores',
        puesto: 'Jefe del departamento de recursos financieros',
        correo: 'jufecaflo@gmail.com',
        id_empresa: 4,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'LIC. Mirna Santos Oropeza',
        puesto: 'Jefe de recursos humanos',
        correo: 'smir10@gmail.com',
        id_empresa: 4,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'ING. Paola Gómez Farías',
        puesto: 'Jefe del área de desarrollo',
        correo: 'pagom_fr@gmail.com',
        id_empresa: 4,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ])
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
