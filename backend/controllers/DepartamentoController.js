const Departamento = require('../models').Departamento;

module.exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(departamentos => {
            res.status(200).json(departamentos);
        }).catch(err => {
            res.status(500).json({error: err});
        });

}