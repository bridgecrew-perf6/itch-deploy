'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('criterios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      valor_max: {
        type: Sequelize.INTEGER
      },
      valor_min: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['asesor_externo', 'asesor_interno'],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('criterios');
  }
};