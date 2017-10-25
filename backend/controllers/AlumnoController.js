const Alumno = require('../models').Alumno;
const Periodo = require('../models').Periodo;
const Carrera = require('../models').Carrera;
const asesor_externo = require('../models').asesor_externo;
const Usuario = require('../models').Usuario;
const Docente = require('../models').Docente;
const Anteproyecto = require('../models').Anteproyecto;
const Proyecto = require('../models').Proyecto;
const observaciones = require('../models').observaciones;
const revision_anteproyecto = require('../models').revision_anteproyecto;
const Asesoria = require('../models').Asesoria;

const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize
const generator = require('generate-password');
const transporter = require('../../config/email');
const fs = require('fs');
const path = require('path');



// config upload files
const MAX_FILE_SIZE_ANTEPROYECTO = 10 * 1000 * 1000;
const multer = require('multer');
const uploadFileAnteproyecto = multer({
        dest: './storeFiles/anteproyectos', 
        limits: {fileSize: MAX_FILE_SIZE_ANTEPROYECTO, files: 1,}, 
        fileFilter: (req, file, cb) => (file.mimetype !== 'application/pdf')? cb(null, false, new Error('El archivo debe ser PDF')): cb(null, true) 
    }).single('fileAnteproyecto');

const uploadFilePlanTrabajo = multer({
    dest: './storeFiles/planes_de_trabajo',
    limits:  {fileSize: MAX_FILE_SIZE_ANTEPROYECTO, files: 1,}, 
    fileFilter: (req, file, cb) => (file.mimetype !== 'application/pdf')? cb(null, false, new Error('El archivo debe ser PDF')): cb(null, true)     
}).single('filePlanTrabajo');

const uploadFileCronograma = multer({
    dest: './storeFiles/cronogramas',
    limits:  {fileSize: MAX_FILE_SIZE_ANTEPROYECTO, files: 1,}, 
    fileFilter: (req, file, cb) => (file.mimetype !== 'application/pdf')? cb(null, false, new Error('El archivo debe ser PDF')): cb(null, true)     
}).single('fileCronograma');

module.exports.addCronograma = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    uploadFileCronograma(req, res, err => {
        if(err) {
            console.error(err);
            res.status(406).json(err);
        }else{
            sequelize.transaction(t => {
                return Proyecto.findOne({where: {id: id_proyecto}}, {transaction: t})
                    .then(_proyecto => {
                        // borramos el archivo del plan de trabajo si ya tiene uno
                        if(_proyecto.filename_cronograma){
                            fs.unlink(`./storeFiles/cronogramas/${_proyecto.filename_cronograma}`);
                        }
                        return Proyecto.update({filename_cronograma: req.file.filename}, {where: {id: id_proyecto}}, {transaction: t});
                    })
            }).then((_proyecto)=>{
                // console.log('success=======>    ', result)
                res.status(200).json(_proyecto)
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
    })
}
module.exports.addFilePlanTrabajo = (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    uploadFilePlanTrabajo(req, res, err => {
        if(err) {
            console.error(err);
            res.status(406).json(err);
        }else{
            sequelize.transaction(t => {
                return Proyecto.findOne({where: {id: id_proyecto}}, {transaction: t})
                    .then(_proyecto => {
                        // borramos el archivo del plan de trabajo si ya tiene uno
                        if(_proyecto.filename_plan_trabajo){
                            fs.unlink(`./storeFiles/planes_de_trabajo/${_proyecto.filename_plan_trabajo}`);
                        }
                        return Proyecto.update({filename_plan_trabajo: req.file.filename}, {where: {id: id_proyecto}}, {transaction: t});
                    })
            }).then((_proyecto)=>{
                // console.log('success=======>    ', result)
                res.status(200).json(_proyecto)
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
    })
}

module.exports.addFileAnteproyecto = (req, res) => {
    const id_anteproyecto = req.params.id_anteproyecto;
    uploadFileAnteproyecto(req, res, (err => {
        if(err){
            console.error(err);
            res.status(406).json(err);
        }else{
            sequelize.transaction((t) => {
                return Anteproyecto.findOne({where: {id: id_anteproyecto}}, {transaction: t})
                .then(anteproyecto_record => {
                    // borramos el archivo del anteproyecto q ya tiene jejej
                    if(anteproyecto_record.path_file_anteproyecto){
                        console.log('ya existe el anteproyecto=========== lo borramos cues')
                        fs.unlink(`./storeFiles/anteproyectos/${anteproyecto_record.path_file_anteproyecto}`);
                    }
                    // console.log(req.file)
                    // console.log(anteproyecto_record)
                    return Anteproyecto.update({path_file_anteproyecto: req.file.filename},{where: {id: id_anteproyecto}}, {transaction: t});
                })
            }).then((anteproyecto)=>{
                // console.log('success=======>    ', result)
                res.status(200).json(anteproyecto)
            }).catch(Sequelize.ValidationError, (err) => {
                var errores = err.errors.map((element) => {
                    return `${element.path}: ${element.message}`
                })
                // console.log('==>', errores)
                res.status(202).json({errores})
            }).catch((err) => {
                res.status(406).json({err: err})
            }) 
            
            // res.status(200).json({fileName: req.fileName})
            // console.log(req.file);
        }

    }));
    // console.log(req);
}

module.exports.getPlanDeTrabajoPDF = (req, res) => {
    const filename = req.params.filename;
    const ruta_pdf = path.join(__dirname, `../../storeFiles/planes_de_trabajo/${filename}`)
    var pdf = fs.readFileSync(ruta_pdf);
    res.contentType("application/pdf");
    res.send(pdf);
}

module.exports.getCronogramaPDF = (req, res) => {
    const filename = req.params.filename;
    const ruta_pdf = path.join(__dirname, `../../storeFiles/cronogramas/${filename}`)
    var pdf = fs.readFileSync(ruta_pdf);
    res.contentType("application/pdf");
    res.send(pdf);
}

module.exports.retryAnteproyecto = (req, res) => {
    const id_alumno = req.body.id_alumno,
        id_periodo = req.body.id_periodo;
    sequelize.transaction(t => {
        return Alumno.findOne({where: {id: id_alumno}}, {transaction: t})
            .then(_alumno => {
                return Usuario.update({rol: 'candidato_residente'}, {where: {id: _alumno.id_usuario}}, {transaction: t})
                    .then( _usuario => {
                        return Anteproyecto.create({
                            id_alumno,
                            id_periodo
                        },{transaction: t})
                    })
            })
    }).then((_anteproyecto)=>{
        res.status(200).json(_anteproyecto);
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

    // Anteproyecto.create({
    //         id_alumno,
    //         id_periodo
    //     }).then((_anteproyecto)=>{
    //     res.status(200).json(_anteproyecto)
    // }).catch(Sequelize.ValidationError, (err) => {
    //     var errores = err.errors.map((element) => {
    //         return `${element.path}: ${element.message}`
    //     })
    //     // console.log('==>', errores)
    //     res.status(202).json({errores})
    // }).catch((err) => {
    //     console.log(err)
    //     res.status(406).json({err: err})
    // }) 
    
}
module.exports.findAllRechazadosPorCarrera = (req, res) => {
    const id_carrera = req.params.id_carrera;
    // console.log('entaaa')
    Alumno.findAll({
        where: {
            id_carrera,
            id: {
                $notIn: [sequelize.literal(`select anteproyectos.id_alumno from anteproyectos join periodos on anteproyectos.id_periodo=periodos.id where periodos.id_carrera=${id_carrera}`)]
            }
        }
    }).then(_alumnos => {
        // console.log('ress', _alumnos)
        res.status(200).json({_alumnos})
    }).catch(err => {
        console.log(err)
        res.status(406).json({err: err})
    })
}
module.exports.updateDatosAnteproyecto = (req, res) => {
    const id_anteproyecto = req.params.id,
            id_asesor_externo = req.body.id_asesor_externo,
            nombre = req.body.nombre,
            objetivo_general = req.body.objetivo_general;
    Anteproyecto.update({id_asesor_externo, nombre, objetivo_general}, {where: {id: id_anteproyecto}})
        .then((anteproyecto)=>{
            // console.log('success=======>    ', result)
            res.status(200).json(anteproyecto)
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


module.exports.getAnteproyecto = (req, res) => {
    // el alumno puedo cambiar su id jeje
    const id_alumno = req.params.id;
    Anteproyecto.findOne({where: {id_alumno}, include: [{model: revision_anteproyecto, as: 'revisiones', include: [{model: Docente, as: 'docente'}]},{model: Alumno, as: 'alumno'}, {model: Periodo, as: 'periodo'}, {model: asesor_externo, as: 'asesor_externo'}]})
        .then(anteproyecto => {
            res.status(200).json(anteproyecto);
        }).catch(err => {
            console.log(err)
            res.status(406).json({err: err})
        })
}
//                     include: [{model: Anteproyecto, as: 'anteproyecto', include: [{model: revision_anteproyecto, as: 'revisiones', include: [{model: Docente, as: 'docente'}]},{model: Alumno, as: 'alumno'}, {model: Periodo, as: 'periodo'}, {model: asesor_externo, as: 'asesor_externo'}] }]

module.exports.getProyecto = (req, res) => {
    const id_alumno = req.params.id;
    sequelize.transaction( t => {
        return Anteproyecto.findOne({where: {id_alumno: id_alumno}}, {transaction: t})
            .then(_anteproyecto => {
                // console.log('========>', _anteproyecto)
                return Proyecto.findOrCreate({
                    where: {id_anteproyecto: _anteproyecto.id},
                    include: [{model: Asesoria, as: 'asesorias'},{model: observaciones, as: 'observaciones'},{model: Anteproyecto, as: 'anteproyecto', include: [{model: revision_anteproyecto, as: 'revisiones', include: [{model: Docente, as: 'docente'}]},{model: Alumno, as: 'alumno'}, {model: Periodo, as: 'periodo'}, {model: asesor_externo, as: 'asesor_externo'}] }],                    
                    transaction: t
                }).spread((proyecto_find, created) => {
                    if(created){
                        // buscar el proyecto :c
                        return Proyecto.findOne({
                            where: {id_anteproyecto: _anteproyecto.id},
                            include: [{model: Anteproyecto, as: 'anteproyecto', include: [{model: revision_anteproyecto, as: 'revisiones', include: [{model: Docente, as: 'docente'}]},{model: Alumno, as: 'alumno'}, {model: Periodo, as: 'periodo'}, {model: asesor_externo, as: 'asesor_externo'}] }],                    
                        }, {transaction: t})
                    }else {
                        return proyecto_find;
                    }
                });
            })

    }).then((_proyecto)=>{
        res.status(200).json(_proyecto)
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
module.exports.add = (req, res) => {
    const no_control = req.body.no_control,
        nombre = req.body.nombre,
        ap_paterno = req.body.ap_paterno,
        ap_materno = req.body.ap_materno,
        id_carrera = req.body.id_carrera,
        correo = req.body.correo,
        sexo = req.body.sexo,
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
                sexo,
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