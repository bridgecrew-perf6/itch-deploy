'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Anteproyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'El anteproyecto debe tener un nombre'}
        }
      },
      objetivo_general: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'El antrpoyecto debe tener un nombre'}
        }
      },
      dictamen:{
        type: Sequelize.ENUM,
        values: ['aprobado','no aprobado'],
        allowNull: false,
        defaultValue: 'no aprobado'
      },
      id_alumno: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'alumnos',
          key: 'id',
          as: 'id_alumno'
        }
      },
      id_periodo: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'periodos',
          key: 'id',
          as: 'id_periodo'
        }
      },
      id_asesor_externo: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'asesores_externos',
          key: 'id',
          as: 'id_asesor_externo'
        }
      }
      ,
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
    return queryInterface.dropTable('Anteproyectos');
  }
};