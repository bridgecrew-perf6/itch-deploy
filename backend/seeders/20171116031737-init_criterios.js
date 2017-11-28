'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('criterios', [
      {
        descripcion: 'Asiste puntualmente con el horario establecido',
        valor_max: 5,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Trabajo en equipo y se comunica de forma efectiva (oral y escrita)',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Tiene iniciativa para colaborar',
        valor_max: 5,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Propone mejoras al proyecto',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Cumple con los objetivos correspondientes al proyecto',
        valor_max: 15,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Es ordenado y cumple satisfactoriamente con las actividades encomendadas en los tiempos establecidos del cronograma',
        valor_max: 15,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Demuestra liderezgo en su actuar',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Demuestra conocimiento en el área de su especialidad',
        valor_max: 20,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Demuestra su comportamiento ético (es diciplinado, acata órdenes, respeta a sus compañeros de trabajo, entre otros)',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Asistió puntualmente a las reuniones de asesoría ',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Demuestra conocimiento en el área de su especialidad',
        valor_max: 20,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Trabaja en equipo y se comunica de forma efectiva (oral y escrita)',
        valor_max: 15,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Es dedicado y proactivo en las actividades encomendadas',
        valor_max: 20,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Es ordenado y cumple satisfactoriamente con las actividades encomendadas en los tiempos establecidos en el cronograma',
        valor_max: 20,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Propone mejoras al proyecto',
        valor_max: 15,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ]);
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
