const Docente = require('../models').Docente;
const Usuario = require('../models').Usuario;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const generator = require('generate-password');

module.exports.add = (req, res) => {
    // console.log(req.body)
    sequelize.transaction((t) => {
        const contrasenia = generator.generate({length: 8});
        console.log('contrasenia', contrasenia);
        return Usuario.create({
            correo: req.body.correo,
            contrasenia: contrasenia,
            rol: 'docente'
        }, {transaction: t}).then((usuario) => {
            return Docente.create({
                titulo: req.body.titulo,
                nombre: req.body.nombre,
                ap_paterno: req.body.ap_paterno,
                ap_materno: req.body.ap_materno,
                id_departamento: req.body.id_departamento,
                id_usuario: usuario.id
            }, {transaction: t});
        });
    }).then((docente)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(docente)
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