'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filename_plan_trabajo: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      aprobacion_plan_trabajo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      filename_cronograma: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      aprobacion_cronograma: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      id_anteproyecto: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        unique: true,
        allowNull: false,
        references: {
          model: 'anteproyectos',
          key: 'id',
          as: 'id_anteproyecto'
        }
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
    return queryInterface.dropTable('Proyectos');
  }
};