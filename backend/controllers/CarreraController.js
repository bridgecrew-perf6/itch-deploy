const Carrera = require('../models').Carrera;
const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const docente_carreras = require('../models').docente_carreras;


module.exports.docentesAsignados = (req, res) => {
    const id_carrera = req.params.id_carrera
    docente_carreras.findAll({where: {id_carrera: id_carrera }})
        .then(docentes_asignados => {
            // console.log(docentes_asignados)
            res.status(200).json(docentes_asignados);
        }).catch(err => {
            res.status(406).json({err: err});
        });
}

module.exports.asignarEncargados = (req, res) => {
    console.log(req.body);
    const id_carrera = req.body.id_carrera,
        id_jefe_proyecto = req.body.id_jefe_proyecto,
        id_presidente_academia = req.body.id_presidente_academia;
        
    filterUpdate = {
        id_carrera: id_carrera,
        $or: [
            {rol: 'presidente_academia'},
            {rol: 'jefe_proyecto'}
        ]
    }
    // insertamos o actualizamos al presidente de academia
    sequelize.transaction((t) => {
        return docente_carreras.update({rol: 'docente'}, {where: filterUpdate}, {transaction: t})
            .then(presidente_updated => {
                return docente_carreras.upsert({
                    id_docente: id_presidente_academia,
                    id_carrera: id_carrera,
                    rol: 'presidente_academia'
                }, {transaction: t}).then(() => {
                    // insertamos o actualizamos al jefe de departamento
                    if(id_jefe_proyecto){
                        console.log('aqui')
                        return docente_carreras.upsert({
                            id_docente: id_jefe_proyecto,
                            id_carrera: id_carrera,
                            rol: 'jefe_proyecto'
                        }, {transaction: t})  
                    }else{
                        return sequelize.Promise.resolve();
                    }
                })
            })
    }).then((docente_carreras)=>{
        res.status(200).json(docente_carreras);
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
module.exports.asignarDocente = (req, res) => {
    console.log(req.body);
}
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