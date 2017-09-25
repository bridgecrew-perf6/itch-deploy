const Usuario = require('../models/index').Usuario;
const Sequelize = require('../models/index').Sequelize;
const bCrypt = require('bcrypt-nodejs');
const generator = require('generate-password');

const generateHash = (contrasenia) => {
  return bCrypt.hashSync(contrasenia, bCrypt.genSaltSync(8), null);
}
module.exports.updateContrasenia = (req, res) => {
	const contrasenia = req.body.nueva_contrasenia;
	const id_usuario = req.user.id;
	const contraseniaHash = generateHash(contrasenia)
	// console.log(id_usuario, contrasenia);
	Usuario.update({contrasenia: contraseniaHash}, {where: {id: id_usuario}})
		.then(usuario => {
			// console.log('=>',departamento)
			res.status(200).json(usuario)
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

module.exports.updateContraseniaEmail = (req, res) => {
	const contrasenia = generator.generate({length: 8});
	console.warn('quit => ', contrasenia)
	const contraseniaHash = generateHash(contrasenia);
	const id_usuario = req.body.id_usuario
	Usuario.update({contrasenia: contraseniaHash}, {where: {id: id_usuario}})
		.then(usuario => {
			// console.log('=>',departamento)
			res.status(200).json(usuario)
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