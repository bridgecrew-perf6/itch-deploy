const Carrera = require('../models').Carrera;
const Sequelize = require('../models').Sequelize;

module.exports.add = (req, res) => {
    const nombre = req.body.nombre,
        id_departamento = req.body.id_departamento;

    Carrera.create({
        nombre,
        id_departamento
    }).then((carrera)=>{
        res.status(200).json(carrera)
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