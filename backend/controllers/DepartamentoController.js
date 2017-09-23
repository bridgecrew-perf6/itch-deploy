const Departamento = require('../models').Departamento;
const Carrera = require('../models').Carrera;
const Docente = require('../models').Docente;
const Usuario = require('../models').Usuario;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const rol = {
    JEFE_PROYECTO: 'jefe_proyecto',
    DOCENTE: 'docente',
    JEFE_DEPARTAMENTO: 'jefe_departamento',
    PRESIDENTE_ACADEMIA: 'presidente_academia'
}


module.exports.findById = (req, res) => {
    Departamento.findOne({
        where: {id: req.param('id')},
        include: [{model: Carrera, as: 'carreras'}, {model: Docente, as: 'docentes'}]})
        .then((departamento) => {
            res.status(200).json(departamento);
        }).catch(err => {
            res.status(406).json({err: err})
        })

}
module.exports.findAll = (req, res) => {
    Departamento.findAll({include: [{model: Carrera, as: 'carreras'}, {model: Docente, as: 'docentes'}]})
        .then(departamentos => {
            res.status(200).json(departamentos);
        }).catch(err => {
            res.status(406).json({err: err});
        });
}

module.exports.add = (req, res) => {
    Departamento.create({
        nombre: req.param('nombre')
    }).then(departamento => {
        // console.log('=>',departamento)
        res.status(200).json(departamento)
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        // console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        res.status(406).json({err: err})
    })
}
module.exports.update = (req, res) => {
    console.log(req.body);
    console.log(req.params)
    const id_departamento = req.params.id,  
        nombre = req.body.nombre_departamento,
        id_usuario = req.body.id_jefe_departamento

    sequelize.transaction(t => {
        return Departamento.update({nombre}, {where: {id: id_departamento}},  {transaction: t})
            .then(departamento => {
                return Usuario.update({rol: roles.DOCENTE}, {where: {rol: roles.JEFE_DEPARTAMENTO}}, {transaction: t})
                    .then(usuario => {
                        return Usuario.update({rol: roles.JEFE_DEPARTAMENTO}, {where: {id: id_usuario}}, {transaction: t});
                    })
            })
    }).then((departamento)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(departamento)
    }).catch(Sequelize.ValidationError, (err) => {
        var errores = err.errors.map((element) => {
            return `${element.path}: ${element.message}`
        })
        // console.log('==>', errores)
        res.status(202).json({errores})
    }).catch((err) => {
        res.status(406).json({err: err})
    })        
}

