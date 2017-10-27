const Anteproyecto = require('../models').Anteproyecto;
const Proyecto = require('../models').Proyecto;
const Alumno = require('../models').Alumno;
const Usuario = require('../models').Usuario;
const asesor_externo = require('../models').asesor_externo;
const Empresa = require('../models').Empresa;
const Periodo = require('../models').Periodo;
const observaciones = require('../models').observaciones;
const Asesoria = require('../models').Asesoria;
const solucion_recomendada = require('../models').solucion_recomendada;
const Carrera = require('../models').Carrera;
const Departamento = require('../models').Departamento;
const Docente = require('../models').Docente;
const seguimiento_proyecto = require('../models').seguimiento_proyecto;
const revision_seguimiento = require('../models').revision_seguimiento;
const Seguimiento = require('../models').Seguimiento;


const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize
const pdfs = require('../../config/pdfs');

const generateHash = (contrasenia) => {
  return bCrypt.hashSync(contrasenia, bCrypt.genSaltSync(8), null);
}

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
module.exports.updateAutorizarFormatoAsesoria = (req, res) => {
    const id_asesoria = req.body.id_asesoria,
        permitir_generar_formato = req.body.permitir_generar_formato;
    Asesoria.update({permitir_generar_formato}, {where: {id: id_asesoria}})
        .then((_asesoria)=>{
            // console.log('success=======>    ', result)
            res.status(200).json(_asesoria)
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

module.exports.generarFormatoDeAsesoria = (req, res) => {
    const id_asesoria = req.params.id_asesoria;
    Asesoria.findOne({
        where: {id: id_asesoria},
        include: [{model: solucion_recomendada, as: 'soluciones_recomendadas'},{model: Proyecto, as:'proyecto', include: [{model: Anteproyecto, as: 'anteproyecto', include: [{model: Docente, as: 'asesor_interno'},{model: asesor_externo, as: 'asesor_externo', include: [{model: Empresa, as: 'empresa'}]},{model: Alumno, as: 'alumno'},{model: Periodo, as: 'periodo', include: [{model: Carrera, as: 'carrera', include: [{model: Departamento, as: 'departamento'}]}]}]}]}]
    }).then(_asesoria => {
        pdfs.generarFormatoAsesoria(_asesoria, res);
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}
module.exports.findAsesorias = (req, res) => {
    const id_proyecto = req.params.id_proyecto;

    Asesoria.findAll({
        where: {
            id_proyecto
        }
    }).then(asesorias => {
        res.status(200).json(asesorias);
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}
module.exports.findSeguimientos = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    seguimiento_proyecto.findAll({
        where: {id_proyecto},
        include: [{model: revision_seguimiento, as: 'revisiones_seguimiento'},{model: Seguimiento, as: 'seguimiento'}],
    }).then(seguimientos_proyecto => {
        res.status(200).json(seguimientos_proyecto);
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}
module.exports.findOrCreateSeguimientos = (req, res) => {
    const id_proyecto = req.body.id_proyecto,
        id_periodo = req.body.id_periodo;
    console.log(req.body)
    sequelize.transaction(t => {
        return Seguimiento.findAll({
            where: {id_periodo}
        }, {transaction: t}).then(_seguimientos => {
            // console.log('busca seguimeibtnp', _seguimientos)
            return sequelize.Promise.map(_seguimientos, (_seguimiento) => {
                console.log('el map')
                return seguimiento_proyecto.findOrCreate({
                    where: {
                        id_seguimiento: _seguimiento.id,
                        id_proyecto: id_proyecto
                    },
                    include: [{model: revision_seguimiento, as: 'revisiones_seguimiento', include: [{model: Docente, as: 'docente'}]},{model: Seguimiento, as: 'seguimiento'}],
                     transaction: t
                })
            })
        })
    }).then((seguimientos)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(seguimientos)
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
module.exports.findSolucionesRecomendadas = (req, res) => {
    const id_asesoria = req.params.id_asesoria;
    
    solucion_recomendada.findAll({
        where: {id_asesoria}
    }).then(soluciones => {
        res.status(200).json(soluciones);
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

module.exports.addObservacionSeguimiento = (req, res) => {
    const id_seguimiento_proyecto = req.body.id_seguimiento,
        id_docente = req.body.id_docente,
        observacion = req.body.observacion;
    revision_seguimiento.create({
        id_seguimiento_proyecto,
        id_docente,
        observacion,
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

module.exports.addSolucionRecomendada = (req, res) => {
    const id_asesoria = req.body.id_asesoria,
        solucion = req.body.solucion;
    solucion_recomendada.create({
        id_asesoria,
        solucion
    }).then((solucion) => {
        res.status(200).json(solucion)
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

module.exports.updateRevisionSeguimiento = (req, res) => {
    const id_revision_seguimiento = req.body.id_revision_seguimiento,
        solucionado = req.body.solucionado;
    revision_seguimiento.update(
        {solucionado},
        {where: {id: id_revision_seguimiento}}
    ).then((revision)=>{
        // console.log('success=======>    ', result)
        // console.log()
        res.status(200).json(revision)
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
module.exports.updateSeguimiento = (req, res) => {
    const id_seguimiento = req.body.id_seguimiento,
        url_seguimiento = req.body.url_seguimiento;
    // console.log('body', req.body);
    seguimiento_proyecto.update(
        {url_seguimiento}, {where: {id: id_seguimiento}}
    ).then((seguimiento)=>{
        // console.log('success=======>    ', result)
        console.log(seguimiento)
        res.status(200).json(seguimiento)
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
module.exports.updateSolucionRecomendada = (req, res) => {
    const id_solucion = req.body.id_solucion,
        solucionado = req.body.solucionado;
    solucion_recomendada.update(
        {solucionado}, 
        {where: {id: id_solucion}}
    ).then((solucion)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(solucion)
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