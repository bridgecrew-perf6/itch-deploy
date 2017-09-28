const Alumno = require('../models').Alumno;
const Usuario = require('../models').Usuario;
const Anteproyecto = require('../models').Anteproyecto;
const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize
const generator = require('generate-password');
const transporter = require('../../config/email');


module.exports.add = (req, res) => {
    const no_control = req.body.no_control,
        nombre = req.body.nombre,
        ap_paterno = req.body.ap_paterno,
        ap_materno = req.body.ap_materno,
        id_carrera = req.body.id_carrera,
        correo = req.body.correo,
        id_periodo = req.body.id_periodo;

    const contrasenia = generator.generate({length: 8});

    sequelize.transaction((t) => {
        return Usuario.create({
            correo,
            contrasenia: contrasenia,
            rol: 'candidato_residente'
        }, {transaction: t}).then((usuario) => {
            return Alumno.create({
                no_control,
                nombre,
                ap_paterno,
                ap_materno,
                id_carrera,
                id_usuario: usuario.id
            }, {transaction: t}).then(alumno => {
                return Anteproyecto.create({
                    id_alumno: alumno.id,
                    id_periodo: id_periodo
                },{transaction: t});
            })
        });
    }).then((alumno)=>{
        // console.log('success=======>    ', alumno)
        // enviar email con contraseña al alumno
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
        res.status(200).json(alumno)
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