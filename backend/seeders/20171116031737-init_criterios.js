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
        descripcion: 'Trabajo en equipo',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Tiene iniciativa para ayudar en las actividades encomendadas',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Organiza su tiempo y trabaja sin necesidad de una superación estrecha',
        valor_max: 5,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Realiza mejoras al proyecto',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Cumple con los objetivos correspondientes al proyecto',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_externo',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      
      {
        descripcion: 'Mostró responsabilidad y compromiso en la residencia profesional',
        valor_max: 5,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Realizó un trabajo innovador en su área de desempeño',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Aplica las competencias para la realización del proyecto',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Es dedicado y proactivo en los trabajos encomendados',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Cumple con los objetivos correspondiente al proyecto',
        valor_max: 10,
        valor_min: 1,
        tipo: 'asesor_interno',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        descripcion: 'Entrega en tiempo y forma el informe técnico',
        valor_max: 5,
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
