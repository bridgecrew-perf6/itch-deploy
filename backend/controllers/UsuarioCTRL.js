
module.exports.authRedirect = (req, res) => {
    if(req.isAuthenticated())
            res.status(200).json({message: 'Ha entreado !'});
    else
        res.status(401).json({message: 'Error en la autenticación del usuario.'});
}

module.exports.isAuth = (req, res) => {
        console.log('test', 'alv');
        if(req.isAuthenticated())
                res.status(200).json({auth: true});
        else
                res.status(200).json({auth: false});
}