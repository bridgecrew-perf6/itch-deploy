const Departamento = require('../models').Departamento;
const Carrera = require('../models').Carrera;
const Docente = require('../models').Docente;
const Sequelize = require('sequelize')

module.exports.findById = (req, res) => {
    Departamento.findOne({
        where: {id: req.param('id')},
        include: [{model: Carrera, as: 'carreras'}, {model: Docente, as: 'docentes'}]})
        .then((departamento) => {
            res.status(200).json(departamento);
        }).catch(err => {
            res.status(406).json({error: err})
        })

}
module.exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json(departamentos);
        }).catch(err => {
            res.status(406).json({error: err});
        });
}

module.exports.add = (req, res) => {
    Departamento.create({
        nombre: req.param('nombre')
    }).then(departamento => {
        console.log('=>',departamento)
        res.status(200).json(departamento)
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        res.status(406).json({err: err})
    })
}

