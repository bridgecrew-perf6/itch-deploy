
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
const proyectoController = require('./controllers/ProyectoController');
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

    // router.route('/carrera/:id/periodos')
    //     .get(carreraController.findById)

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
    router.route('/docentes')
        .get(isAuth, docenteController.findAll)
    router.route('/docente/subdirector_academico')
        .put(isAuth, docenteController.updateSubdirectorAcademico);

    // ASESOR EXTERNO
    router.route('/asesor_externo')
        .post(isAuth, AsesorController.add)
    //Anteproyectos por periodo
    router.route('/periodo/:id_periodo/anteproyectos')
        .get(isAuth, carreraController.findAnteproyectosByPeriodo);
    // ALUMNOS
    router.route('/alumno')
        .post(isAuth, alumnoController.add)

    router.route('/alumno/cancelacion')
        .put(isAuth, alumnoController.cancelacionProyecto);
    router.route('/alumno/:id_alumno/cancelacion')
        .get(isAuth, alumnoController.getCancelacionProyecto);
    
    router.route('/alumno/cancelacion_justificacion')
        .put(isAuth, alumnoController.justificacionCancelacionProyecto);
    router.route('/alumno/:id_cancelacion/generarFormatoDeCancelacion')
        .get(isAuth, alumnoController.generarFormatoDeCancelacion);
    router.route('/alumno/:id/anteproyecto')
        .get(isAuth, alumnoController.getAnteproyecto)
        .put(isAuth, alumnoController.updateDatosAnteproyecto);
    
    router.route('/alumno/:id_alumno/solicitud_residencia')
        .get(isAuth, alumnoController.generarSolicitudDeResidencia);
        
    router.route('/alumno/:id/proyecto')
        .get(isAuth, alumnoController.getProyecto)
    router.route('/alumno/:id/_proyecto')
        .get(isAuth, alumnoController.get_Proyecto);

    router.route('/alumno/file_anteproyecto/:id_anteproyecto')
        .post(isAuth,alumnoController.addFileAnteproyecto);
    
    router.route('/alumno/file_plan_trabajo/:id_proyecto')
        .post(isAuth, alumnoController.addFilePlanTrabajo)

    router.route('/plan_de_trabajo/pdf/:filename')
        .get(isAuth, alumnoController.getPlanDeTrabajoPDF)

    router.route('/alumno/cronograma/:id_proyecto')
        .post(isAuth, alumnoController.addCronograma)
    
    router.route('/cronograma/pdf/:filename')
        .get(isAuth, alumnoController.getCronogramaPDF)

    router.route('/alumnos/:id_carrera/rechazados')
        .get(isAuth, alumnoController.findAllRechazadosPorCarrera)

    router.route('/alumno/retry_anteproyecto')
        .put(isAuth, alumnoController.retryAnteproyecto)

    // PROYECTO
    router.route('/proyectos/asesor_interno/:id_asesor_interno')
        .get(isAuth, proyectoController.getProyectosByAsesorInterno)
    router.route('/proyectos/asesor_externo/:id_asesor_externo')
        .get(isAuth, proyectoController.getProyectosByAsesorExterno)
    
    router.route('/proyecto/observacion')
        .post(isAuth, proyectoController.addObservacion)
        .put(isAuth, proyectoController.updateObservacion)

    router.route('/proyecto/:id_proyecto/observaciones')
        .get(isAuth, proyectoController.findObservaciones)

    router.route('/proyecto/:id_proyecto/asesorias')
        .get(isAuth, proyectoController.findAsesorias)
    
    router.route('/proyecto/asesoria/solucion_recomendada')
        .post(isAuth, proyectoController.addSolucionRecomendada)
        .put(isAuth, proyectoController.updateSolucionRecomendada)


    
    router.route('/proyecto/evaluacionAnexoIII/criterios/asesor_interno')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoIIIAsesorInterno);

    router.route('/proyecto/evaluacionAnexoIII/criterios/asesor_externo')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoIIIAsesorExterno);

    router.route('/proyecto/evaluacionAnexoXXX/criterios/asesor_interno')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoXXXAsesorInterno);
    router.route('/proyecto/evaluacionAnexoXXX/criterios/asesor_externo')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoXXXAsesorExterno);

    router.route('/proyecto/evaluacionAnexoXXIX/criterios/asesor_interno')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoXXIXAsesorInterno);
    router.route('/proyecto/evaluacionAnexoXXIX/criterios/asesor_externo')
        .get(isAuth, proyectoController.getCriteriosEvaluacionAnexoXXIXAsesorExterno);



    router.route('/proyecto/evaluacion/asesor_interno')
        .put(isAuth, proyectoController.addEvaluacionAsesorInterno);
        
    router.route('/proyecto/evaluacion/asesor_externo')
        .put(isAuth, proyectoController.addEvaluacionAsesorExterno);

    router.route('/proyecto/evaluacion_seguimiento/asesor_interno')
        .put(isAuth, proyectoController.addEvaluacionSeguimientoAsesorInterno);
    router.route('/proyecto/evaluacion_seguimiento/asesor_externo')
        .put(isAuth, proyectoController.addEvaluacionSeguimientoAsesorExterno);

    router.route('/proyecto/autorizar_carta_liberacion/asesor_interno')
        .put(isAuth, proyectoController.autorizarCartaDeLiberacionAsesorInterno);
    router.route('/proyecto/autorizar_carta_liberacion/asesor_externo')
        .put(isAuth, proyectoController.autorizarCartaDeLiberacionAsesorExterno);
    
        
    router.route('/proyecto/seguimientos')
        .put(isAuth, proyectoController.findOrCreateSeguimientos)
    router.route('/proyecto/informe_tecnico')
        .put(isAuth, proyectoController.updateInformeTecnico)

    router.route('/proyecto/:id_proyecto/seguimientos')
        .get(isAuth, proyectoController.findSeguimientos);

    router.route('/proyecto/seguimiento')
        .put(isAuth, proyectoController.updateSeguimiento);
    
    router.route('/proyecto/seguimiento/observacion')
        .post(isAuth, proyectoController.addObservacionSeguimiento)
    
    router.route('/proyecto/revision_seguimiento')
        .put(isAuth, proyectoController.updateRevisionSeguimiento)

    router.route('/proyecto/asesoria/:id_asesoria/soluciones_recomendadas')
        .get(isAuth, proyectoController.findSolucionesRecomendadas)

    router.route('/proyecto/asesoria')
        .post(isAuth, proyectoController.addAsesoria)
    router.route('/proyecto/asesoria_autorizar_formato')
        .put(isAuth, proyectoController.updateAutorizarFormatoAsesoria)
    router.route('/asesoria/:id_asesoria/generar_formato/')
        .get(isAuth, proyectoController.generarFormatoDeAsesoria)

    router.route('/proyecto/:id_proyecto/formato_evaluacion/anexoIII')
        .get(isAuth, proyectoController.generarFormatoDeEvaluacionAnexoIII)

    router.route('/proyecto/:id_proyecto/formato_evaluacion/anexoXXX')
        .get(isAuth, proyectoController.generarFormatoDeEvaluacionAnexoXXX)
    
    router.route('/proyecto/:id_seguimiento/formato_evaluacion/anexoXXIX')
        .get(proyectoController.generarFormatoDeEvaluacionAnexoXXIX)
    
    

    
    router.route('/proyecto/:id_proyecto/carta_liberacion/asesor_externo')
        .get(isAuth, proyectoController.generarCartaLiberacionAsesorExterno)

    router.route('/proyecto/:id_proyecto/carta_liberacion/asesor_interno')
        .get(isAuth, proyectoController.generarCartaLiberacionAsesorInterno)    
    router.route('/asesoria/tipo')
        .put(isAuth, proyectoController.updateTipoAsesoria);
    // ANTEPROYECTO
    router.route('/anteproyectos/:id_periodo')
        .get(isAuth, anteproyectoController.findByPeriodo)

    router.route('/anteproyecto/pdf/:filename')
        .get(isAuth, anteproyectoController.getAnteproyectoPDF)
    
    router.route('/anteproyecto/factibilidad')
        .put(isAuth, anteproyectoController.addFactibilidad)
        
    router.route('/anteproyecto/factibilidad/correciones')
        .put(isAuth, anteproyectoController.addFactibilidadCorrecciones)

    router.route('/anteproyecto/set_dictamen')
        .put(isAuth, anteproyectoController.setDictamen);
    router.route('/anteproyecto/set_asesor_interno')
        .put(isAuth, anteproyectoController.setAsesorInterno);
    // PERIODO
    router.route('/periodo/:id/')
        .get(isAuth, periodoController.findById);
    
    router.route('/periodo/:id/dictamen')
        .get(isAuth, periodoController.findDictamen);
    
    router.route('/periodo/fecha_fin_entrega_anteproyecto')
        .put(isAuth, periodoController.updateFechaFinEntregaAnteproyectos);
    
    router.route('/dictamen/pdf/:filename')
        .get(isAuth, periodoController.getDictamenPDF);
        
    router.route('/periodo/generar_dictamen')
        .post(isAuth, periodoController.generarDictamen)
        // put actualizar dictamen jeje
    router.route('/periodo/seguimiento')
        .post(isAuth, periodoController.addSeguimiento);
    
    router.route('/periodo/:id_periodo/proyectos')
        .get(isAuth, periodoController.getProyectos);



        
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