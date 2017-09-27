
// Controllers
const usuarioController = require('./controllers/UsuarioController');
const departamentoController = require('./controllers/DepartamentoController');
const docenteController = require('./controllers/DocenteController');
const EmpresaController = require('./controllers/EmpresaController');
const AsesorController = require('./controllers/AsesorExternoController');
const carreraController = require('./controllers/CarreraController');


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
    router.get('/usuario/logout', usuarioController.logout);

    router.put('/usuario/cambiar_contrasenia', isAuth, usuarioController.updateContrasenia);
    router.put('/usuario/cambiar_contrasenia/email', usuarioController.updateContraseniaEmail); // isAuth
   
    // DEPARTAMENTO
    router.route('/departamento')
        .get(isAuth, departamentoController.findAll)
        .post(isAuth, departamentoController.add)

    router.route('/departamento/:id')
        .get(isAuth, departamentoController.findById) 
        .put(isAuth, departamentoController.update)

    // CARRERA
    router.route('/carrera')
        .post(isAuth, carreraController.add)
    // EMPRESAS
    router.route('/empresa')
        .get(isAuth, EmpresaController.findAll)
        .post(isAuth, EmpresaController.add)
    
    router.route('/empresa/:id')
        .put(isAuth, EmpresaController.update);

    // DOCENTE
    router.route('/docente')
        .post(isAuth, docenteController.add)

    // ASESOR EXTERNO
    router.route('/asesor_externo')
        .post(isAuth, AsesorController.add);


    app.use('/api',router);

     // Redirect trafict to react app
     app.get('*', (req, res) => {
        res.render('index');
    });

    

    function isAuth(req, res, next){
        if(req.isAuthenticated())
            return next()
        res.status(203).json({error: "Necesita autenticarse"});
    }
}