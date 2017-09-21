'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      clasificacion: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['industrial','servicios','público','privado','otro']
      },
      rfc: {
        type: Sequelize.STRING(13),
      },
      domicilio: {
        type: Sequelize.STRING(30)
      },
      colonia: {
        type: Sequelize.STRING(30)
      },
      codigo_postal: {
        type: Sequelize.STRING(5)
      },
      fax: {
        type: Sequelize.STRING(15)
      },
      nombre_titular: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      puesto_titular: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nombre_firma_acuerdo: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      puesto_firma_acuerdo: {
        type: Sequelize.STRING(50),
        allowNull: false
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
    return queryInterface.dropTable('Empresas');
  }
};