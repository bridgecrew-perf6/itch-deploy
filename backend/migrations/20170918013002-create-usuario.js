'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      correo:{ 
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true
      },
      contrasenia: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      rol: {
        type: Sequelize.ENUM, 
        allowNull: false, 
        values: ['candidato_residente','residente','docente','admin','jefe_departamento','jefe_proyecto','presidente_academia']
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
    return queryInterface.dropTable('Usuarios');
  }
};