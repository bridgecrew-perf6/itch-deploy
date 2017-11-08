const Docente = require('../models').Docente;
const docente_carreras = require('../models').docente_carreras;

const Usuario = require('../models').Usuario;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const generator = require('generate-password');
const transporter = require('../../config/email');


module.exports.updateSubdirectorAcademico = (req, res) => {
    const id_usuario = req.body.id_usuario;
    sequelize.transaction(t => {
        return Usuario.update({rol: 'docente'},{where: {rol: 'subdirector_academico'}}, {transaction: t})
            .then(affectedRows => {
                return Usuario.update({rol: 'subdirector_academico'}, {where: {id: id_usuario}}, {transaction:t});
            })
    }).then((_usuario)=>{
        // console.log('success=======>    ', result)
        res.status(200).json(_usuario)
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
module.exports.findAll = (req, res) => {
    Docente.findAll({
        include: [{model: Usuario, as: 'usuario'}]
    }).then(docentes => {
        res.status(200).json(docentes)
    }).catch((err) => {
        res.status(406).json({err: err})
    })  
}
module.exports.add = (req, res) => {
    // console.log(req.body)
    const contrasenia = generator.generate({length: 8});
    const correo = req.body.correo
    sequelize.transaction((t) => {
        console.log('contrasenia', contrasenia);
        return Usuario.create({
            correo,
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
        // enviar email con contraseña al docente
        const mailOptions = {
            from: 'seguimientoresidenciasitch@gmail.com',
            to: correo,
            subject: 'Contraseña para acceder al sistema de seguimiento de residencias ITCH',
            text: `Usuario: ${correo}, contraseña: ${contrasenia}`
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.error('EMAIL', err)
            }else{
                console.log('EMAIL', 'contraseña enviada!');
            }
        })
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