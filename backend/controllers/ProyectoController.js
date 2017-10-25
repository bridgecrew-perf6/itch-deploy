const Anteproyecto = require('../models').Anteproyecto;
const Proyecto = require('../models').Proyecto;
const Alumno = require('../models').Alumno;
const Usuario = require('../models').Usuario;
const asesor_externo = require('../models').asesor_externo;
const Empresa = require('../models').Empresa;
const Periodo = require('../models').Periodo;
const observaciones = require('../models').observaciones;
const Asesoria = require('../models').Asesoria;



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

module.exports.addAsesoria = (req, res) => {
    const id_proyecto = req.body.id_proyecto,
        id_asesor_interno = req.body.id_asesor_interno,
        fecha = req.body.fecha,
        url_avance = req.body.url_avance,
        temas_a_asesorar = req.body.temas_a_asesorar;
    // console.log(')===========>', req.body)
    Asesoria.create({
        id_proyecto,
        id_asesor_interno,
        fecha,
        url_avance,
        temas_a_asesorar
    }).then((_asesoria)=>{
        res.status(200).json(_asesoria);
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        // console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        console.log(err)
        res.status(406).json({err: err})
    })    
}
module.exports.findObservaciones = (req, res) => {
    const id_proyecto = req.params.id_proyecto;

    observaciones.findAll({
        where: {
            id_proyecto,
        }
    }).then(_observaciones => {
        res.status(200).json(_observaciones);
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}

module.exports.updateObservacion = (req, res) => {
    const id_observacion = req.body.id_observacion,
        solucionada = req.body.solucionada;

    observaciones.update({
        solucionada
    },{where: {id: id_observacion}}).then((_observacion)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(_observacion)
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        // console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        console.log(err);
        res.status(406).json({err: err})
    }) 
}
module.exports.addObservacion = (req, res) => {
    // console.log('==========>',req.body)
    const id_proyecto = req.body.id_proyecto,
        id_asesor_interno = req.body.id_asesor_interno,
        tipo = req.body.tipo,
        observacion = req.body.observacion;

    observaciones.create({
        id_proyecto,
        id_asesor_interno,
        tipo,
        observacion
    }).then((_observacion)=>{
        res.status(200).json(_observacion);
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        // console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        console.log(err)
        res.status(406).json({err: err})
    }) 
    
}