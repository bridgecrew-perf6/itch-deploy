var bCrypt = require('bcrypt-nodejs');
const Usuario = require('../../backend/models').Usuario;
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) =>{    
    passport.serializeUser((usuario, done) => {
        done(null, usuario.id);
    });
	passport.deserializeUser((id, done) => {
        Usuario.findById(id).then(usuario => {
            done(null, {id: usuario.id, isAdmin: usuario.isAdmin})
        })
    });
    passport.use('local-login', new LocalStrategy({
        usernameField: 'correo',
        passwordField: 'contrasenia',
        passReqToCallback: true
    }, 
        (req, correo, contrasenia, done) => {
            req.logout();
            var isValidContrasenia = (usuario_contrasenia, contrasenia) => {
                return bCrypt.compareSync(contrasenia, usuario_contrasenia);
            }
            Usuario.findOne({ where: { correo: correo}})
                .then(usuario => {
                    if(!usuario){
                        return done(null, false, {message: 'El correo no existe'})
                    }
                    if(!isValidContrasenia(usuario.contrasenia, contrasenia)){
                        return done(null, false, {message: 'Contraseña incorrecta'});
                    }
                    return done(null, usuario);})
                .catch(err => {
                    console.error("Error: ", err);
                    return done(null, false, {message: 'Algo salio mal en la autenticación :O'})
                });
        }
    ))
}

