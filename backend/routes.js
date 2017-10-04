
// Controllers
const usuarioController = require('./controllers/UsuarioController');
const departamentoController = require('./controllers/DepartamentoController');
const docenteController = require('./controllers/DocenteController');
const EmpresaController = require('./controllers/EmpresaController');
const AsesorController = require('./controllers/AsesorExternoController');
const carreraController = require('./controllers/CarreraController');
const alumnoController = require('./controllers/AlumnoController');
const periodoController = require('./controllers/PeriodoController');
const anteproyectoController = require('./controllers/AnteproyectoController')

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
        .get(departamentoController.findById) 
        .put(isAuth, departamentoController.update)

    // CARRERA
    router.route('/carrera')
        .post(isAuth, carreraController.add)
    
    router.route('/carrera/asignar_encargados')
        .post(isAuth, carreraController.asignarEncargados)
    
    router.route('/carrera/asignar_docentes')
        .post(isAuth, carreraController.asignarDocentes)
    
    router.route('/carrera/:id_carrera/docentes_asignados')
        .get(isAuth, carreraController.docentesAsignados);

    router.route('/carrera/periodo')
        .post(isAuth, carreraController.addPeriodo)
    
    router.route('/carrera/:id_carrera/periodos')
        .get(carreraController.findById)

    router.route('/carrera/:id/periodos')
        .get(carreraController.findById)
    router.route('/carrera/docente_habilitado')
        .put(isAuth, carreraController.docenteHabilitado)
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
        .post(isAuth, AsesorController.add)
    //Anteproyectos por periodo
    router.route('/periodo/:id_periodo/anteproyectos')
        .get(carreraController.findAnteproyectosByPeriodo);
    // ALUMNOS
    router.route('/alumno')
        .post(isAuth, alumnoController.add)

    router.route('/alumno/:id/anteproyecto')
        .get(isAuth, alumnoController.getAnteproyecto)
        .put(isAuth, alumnoController.updateDatosAnteproyecto);
    
    router.route('/alumno/file_anteproyecto/:id_anteproyecto')
        .post(isAuth,alumnoController.addFileAnteproyecto);

    // ANTEPROYECTO
    router.route('/anteproyectos/:id_periodo')
        .get(isAuth, anteproyectoController.findByPeriodo)

    router.route('/anteproyecto/pdf/:filename')
        .get(isAuth, anteproyectoController.getAnteproyectoPDF)
    router.route('/anteproyecto/factibilidad')
        .put(isAuth, anteproyectoController.addFactibilidad)

    router.route('/anteproyecto/set_dictamen')
        .put(isAuth, anteproyectoController.setDictamen);
    router.route('/anteproyecto/set_asesor_interno')
        .put(isAuth, anteproyectoController.setAsesorInterno);
    // PERIODO
    router.route('/periodo/:id/')
        .get(periodoController.findById);



        
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