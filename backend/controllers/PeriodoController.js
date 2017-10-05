const Periodo = require('../models').Periodo;
const Docente = require('../models').Docente;
const Carrera = require('../models').Carrera;
const Departamento = require('../models').Departamento;
const docente_carreras = require('../models').docente_carreras;
const Anteproyecto = require('../models').Anteproyecto;
const revision_anteproyecto = require('../models').revision_anteproyecto;
const Alumno = require('../models').Alumno;
const asesor_externo = require('../models').asesor_externo;
const Empresa = require('../models').Empresa;

const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize


module.exports.updateFechaFinEntregaAnteproyectos = (req, res) => {
    const id_periodo = req.body.id_periodo,
        fecha_fin_entrega_anteproyecto = req.body.fecha_fin_entrega_anteproyecto;

        Periodo.update({fecha_fin_entrega_anteproyecto}, {where: {id: id_periodo}})
            .then((periodo)=>{
                // console.log('success=======>    ', result)
                res.status(200).json(periodo)
            }).catch(Sequelize.ValidationError, (err) => {
                console.log(err);
                var errores = err.errors.map((element) => {
                    return `${element.path}: ${element.message}`
                })
                // console.log('==>', errores)
                res.status(202).json({errores})
            }).catch((err) => {
                res.status(406).json({err: err})
            })  

}

module.exports.findDictamen = (req, res) => {
    const id_periodo = req.params.id;
    Periodo.findOne({
        where: {id: id_periodo},
        include: [
            {model: Carrera, as: 'carrera', include: [{model: Departamento, as: 'departamento'}]},
            {model: Anteproyecto, as: 'anteproyectos', include: [{model: Alumno, as: 'alumno'}, {model: asesor_externo, as: 'asesor_externo', include: [{model: Empresa, as: 'empresa'}]}, {model: Docente, as: 'asesor_interno'}], where: {dictamen: 'aprobado'}, required: false}
        ]
    }).then(_periodo => {
        // console.log('======', _periodo)
        res.status(200).json(_periodo);
    }).catch(err => {
        res.status(406).json({err: err});
    });
}

module.exports.findById = (req, res) => {
    const id = req.params.id;
    Periodo.findOne({
        where: {id},
        include: [
                    {model: Carrera, as: 'carrera', include: [{model: docente_carreras, as: 'docentes_carreras', include: [{model: Docente, as: 'docente'}]}]},
                    {model: Anteproyecto, as: 'anteproyectos', include: [{model: revision_anteproyecto, as: 'revisiones', include: [{model: Docente, as:'docente'}]},{model: Alumno, as: 'alumno'}, {model: asesor_externo, as: 'asesor_externo', include: [{model: Empresa, as: 'empresa'}]}, {model: Docente, as: 'asesor_interno'}]}
                ]
    }).then(_periodo => {
        res.status(200).json(_periodo);
    }).catch(err => {
        res.status(406).json({err: err});
    });
}