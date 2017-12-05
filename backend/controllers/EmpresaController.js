const Empresa = require('../models').Empresa
const Sequelize = require('../models').Sequelize
const sequelize = require('../models').sequelize
const asesor_externo = require('../models').asesor_externo

module.exports.findAll = (req, res) => {
    // {include: [{model: asesor_externo, as: 'asesores_externos'}]}
    Empresa.findAll({include: [{model: asesor_externo, as: 'asesor_externos'}]})
        .then(empresas => {
            res.status(200).json({empresas})
        }).catch(err => {
            res.status(406).json({err})
        })
}

module.exports.add = (req, res) => {
    // console.log(req.body);
    const nombre= req.body.nombre,
        clasificacion= req.body.clasificacion,
        rfc= req.body.rfc,
        domicilio= req.body.domicilio || '',
        colonia= req.body.colonia || '',
        codigo_postal= req.body.codigo_postal || '',
        fax= req.body.fax || '',
        mision = req.body.mision || '',
        puesto_titular= req.body.puesto_titular,
        nombre_titular= req.body.nombre_titular,
        puesto_firma_acuerdo= req.body.puesto_firma_acuerdo,
        nombre_firma_acuerdo= req.body.nombre_firma_acuerdo
    
    Empresa.create({
        nombre,
        clasificacion,
        rfc,
        domicilio,
        colonia,
        codigo_postal,
        fax,
        mision,
        puesto_titular,
        nombre_titular,
        puesto_firma_acuerdo,
        nombre_firma_acuerdo
    }).then(empresa => {
        // console.log('=>',departamento)
        res.status(200).json(empresa)
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
    // console.log(req.body);
    const id = req.params.id,
        rfc= req.body.rfc,
        domicilio= req.body.domicilio || '',
        colonia= req.body.colonia || '',
        codigo_postal= req.body.codigo_postal || '',
        fax= req.body.fax || '',
        mision = req.body.mision || '',
        puesto_titular= req.body.puesto_titular,
        nombre_titular= req.body.nombre_titular,
        puesto_firma_acuerdo= req.body.puesto_firma_acuerdo,
        nombre_firma_acuerdo= req.body.nombre_firma_acuerdo
    
    Empresa.update({
        rfc,
        domicilio,
        colonia,
        codigo_postal,
        fax,
        mision,
        puesto_titular,
        nombre_titular,
        puesto_firma_acuerdo,
        nombre_firma_acuerdo
    }, {where: {id}}).then(empresa => {
        // console.log('=>',departamento)
        res.status(200).json(empresa)
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