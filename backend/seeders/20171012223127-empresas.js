'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas',[
      {
        nombre: 'Unidad de Especialidad Médica – Centro de Atención Primaria en Adicciones (UNEME-CAPA)',
        clasificacion: 'público',
        rfc: 'SES870401TX8',
        domicilio: 'Venustiano Carranza No. 18',
        colonia: '20 de noviembre',
        codigo_postal: '39096',
        fax: '',
        nombre_titular: 'Lic. Jesús Eduardo Tejada Herrera',
        puesto_titular: 'Coordinador',
        nombre_firma_acuerdo: 'Lic. Jesús Eduardo Tejada Herrera',
        puesto_firma_acuerdo: 'Coordinador',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'Secretaria de Comunicaciones y Transportes',
        clasificacion: 'servicios',
        rfc: 'NUF865849RR3',
        domicilio: 'Dr. Gabriel Leyva Alarcón S.N.',
        colonia: 'Burócratas',
        codigo_postal: '39091',
        fax: '4725227',
        nombre_titular: 'Ing. Rigoberto Villegas Montoya',
        puesto_titular: 'Director general',
        nombre_firma_acuerdo: 'Lic. Leticia Hernández Gómez ',
        puesto_firma_acuerdo: 'Jefe de departamento de recursos humanos',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'Coordinación Estatal del Servicio Profesional Docente (CESPD)  del Estado de Guerrero',
        clasificacion: 'público',
        rfc: 'SPD547728CE4',
        domicilio: 'Prolongación Valerio Trujano 5',
        colonia: 'Nicolás Bravo',
        codigo_postal: '39050',
        fax: '4725227',
        nombre_titular: 'Dra. Margarita Nava Nava',
        puesto_titular: 'Coordinadora Estatal',
        nombre_firma_acuerdo: 'Ing. José Alfredo Jiménez Campos',
        puesto_firma_acuerdo: 'Jefe del departamento de recursos humanos',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        nombre: 'Cafetalera los portales',
        clasificacion: 'privado',
        rfc: 'POR948394CF9',
        domicilio: 'Heroico Colegio Militar 7',
        colonia: 'Centro',
        codigo_postal: '39000',
        fax: '4723599',
        nombre_titular: 'Lic. Juanita García León',
        puesto_titular: 'Gerente general',
        nombre_firma_acuerdo: 'Lic. Beatriz Cruz Morales',
        puesto_firma_acuerdo: 'Coordinador general',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      }
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
