const Anteproyecto = require('../models').Anteproyecto;
const Proyecto = require('../models').Proyecto;
const Alumno = require('../models').Alumno;
const Usuario = require('../models').Usuario;
const asesor_externo = require('../models').asesor_externo;
const Empresa = require('../models').Empresa;
const Periodo = require('../models').Periodo;



const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize

module.exports.getProyectosByAsesorInterno = (req, res) => {
    const id_asesor_interno = req.params.id_asesor_interno;
    Proyecto.findAll({ 
        include: [{model: Anteproyecto, as: 'anteproyecto', where: {id_asesor_interno}, include: [{model: Periodo, as: 'periodo'},{model: Alumno, as: 'alumno', include: [{model: Usuario, as: 'usuario'}]}, {model: asesor_externo, as: 'asesor_externo', include: [{model: Empresa, as: 'empresa'}] }]}]
    })
    .then(proyectos => {
        res.status(200).json(proyectos);
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}