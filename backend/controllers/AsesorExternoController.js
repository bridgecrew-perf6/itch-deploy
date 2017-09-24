const AsesorExterno = require('../models').asesor_externo;
const Sequelize = require('../models').Sequelize

module.exports.add = (req, res) => {
    console.log(req.body);
    const nombre = req.body.nombre,
        puesto = req.body.puesto,
        id_empresa = req.body.id_empresa
        AsesorExterno.create({
            nombre,
            puesto,
            id_empresa
        }).then(asesor_externo => {
            // console.log('=>',departamento)
            res.status(200).json(asesor_externo)
        }).catch(Sequelize.ValidationError, (err) => {
            var errores = err.errors.map((element) => {
                return `${element.path}: ${element.message}`
            })
            // console.log('==>', errores)
            res.status(202).json({errores})
        }).catch((err) => {
            console.log('=>', err)
            res.status(406).json({err: err})
        })
}