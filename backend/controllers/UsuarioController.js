const Usuario = require('../models/index').Usuario;
module.exports.isAuth = (req, res) => {
	if(req.isAuthenticated()){
		console.warn('auth: ', req.user)
		res.status(200).json({isAuth: true, isAdmin: req.user.rol});
	}
	else{
		res.status(203).json({isAuth: false});
	}
}

module.exports.updateRol = (req, res) => {
	if(req.body.rol === 'admin'){
		res.staus(203).json({errores: 'No puede dar el rol de administrador del sistema'});
	}else{
		Usuario.findById(req.body.id_usuario)
			.then(usuario => {
				return usuario.update({rol: req.body.rol})
					.then(usuario => {
						res.status(200).json({usuario})
					})
			}).catch(err => {
				res.status(203).json({err});
			})
	}
}

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/usuario/auth');
}