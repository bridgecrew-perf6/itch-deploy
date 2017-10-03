const Anteproyecto = require('../models').Anteproyecto;
const Alumno = require('../models').Alumno;
const asesor_externo = require('../models').asesor_externo;
const Empresa = require('../models').Empresa;
const revision_anteproyecto = require('../models').revision_anteproyecto;

const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize
const fs = require('fs')
const path = require('path')


module.exports.addFactibilidad = (req, res) => {
    const id_docente = req.body.id_docente,
        id_anteproyecto = req.body.id_anteproyecto,
        esFactible = req.body.esFactible;
    revision_anteproyecto.upsert(
        {id_docente, id_anteproyecto, esFactible}
    ).then(rev_anteproyecto => {
        // console.log('=>',departamento)
        res.status(200).json(rev_anteproyecto)
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

module.exports.findByPeriodo = (req, res) => {
    const id_periodo = req.params.id_periodo;
    Anteproyecto.findAll({
            where: {id_periodo},
            include: [{model: Alumno, as: 'alumno'}, {model: asesor_externo, as: 'asesor_externo', include: [{model: Empresa, as: 'empresa'}] }]
        })
        .then(anteproyecto => {
            res.status(200).json(anteproyecto);
        }).catch(err => {
            console.log(err)
            res.status(406).json({err: err})
        })
}

module.exports.getAnteproyectoPDF = (req, res) => {
    const filename = req.params.filename;
    const ruta_pdf = path.join(__dirname, `../../storeFiles/anteproyectos/${filename}`)
    var pdf = fs.readFileSync(ruta_pdf);
    res.contentType("application/pdf");
    res.send(pdf);
}