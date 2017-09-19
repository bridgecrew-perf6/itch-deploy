const Departamento = require('../models').Departamento;

module.exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json(departamentos);
        }).catch(err => {
            res.status(500).json({error: err});
        });
}

module.exports.add = (req, res) => {
    console.warn('aquialv', req.body);
    res.status(200).json({});
}