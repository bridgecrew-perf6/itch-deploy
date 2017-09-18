
// Controllers
const usuarioController = require('./controllers/UsuarioController');
const departamentoController = require('./controllers/DepartamentoController');
module.exports =  (app, express, passport) => {
   
    const router = express.Router();
    // USUARIO
    router.post('/usuario/auth', passport.authenticate('local-login',
        {
            successRedirect: '/api/usuario/isAuth',
            failureRedirect: '/api/usuario/isAuth'
        }
    ))

    router.get('/usuario/isAuth', usuarioController.isAuth);

    // DEPARTAMENTO
    router.route('/departamento')
        .get(departamentoController.findAll)


    app.use('/api',router);

     // Redirect trafict to react app
     app.get('*', (req, res) => {
        res.render('index');
    });

    

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
            return next()
        res.status(401).json({error: "Necesita autenticarse"});
    }
}