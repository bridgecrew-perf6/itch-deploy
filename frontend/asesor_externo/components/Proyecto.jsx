import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button, Row, Col, Upload, Modal, Tooltip, Table, Switch, message, Tabs, Alert, Select} from 'antd';
import axios from 'axios';
import moment from 'moment';
import uuid from 'uuid';
const { Item } = Form;
const TabPane = Tabs.TabPane;



// Components

import FormEvaluacion from '../components/FormEvaluacion.jsx';
import FormEvaluacionSeguimiento from '../components/FormEvaluacionSeguimiento.jsx';

export default class Proyecto extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuario: props.usuario,
            proyecto: props.proyecto,
            renderSeguimiento: null,
            criterios_evaluacion: null,
            visibleEvaluacionAsesorExterno: false,
            criterios_evaluacion_seguimiento: null,
            visibleEvaluacionSeguimientoAsesorExterno: false
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            usuario: nextProps.usuario,
            proyecto: nextProps.proyecto,
            renderSeguimiento: null,
            criterios_evaluacion: null,
            visibleEvaluacionAsesorExterno: false,
            criterios_evaluacion_seguimiento: null,
            visibleEvaluacionSeguimientoAsesorExterno: false
        })
    }
    showEvaluacionAsesorExterno = (alumno) => {
        if(alumno.plan_estudios === '2009-2010'){
            axios.get('/api/proyecto/evaluacionAnexoIII/criterios/asesor_externo')
            .then(res => {
                if(res.status === 200){
                    // console.warn('cri', res.data)
                    this.setState({
                        criterios_evaluacion: res.data,
                        visibleEvaluacionAsesorExterno: true,
                        visibleEvaluacionSeguimientoAsesorExterno: false
                    })
                }else{
                    message.warn('Error al realizar petición de criterios de evaluación, favor de reportar al administrador.')
                }
            })
        }else if(alumno.plan_estudios === '2015-2016'){
            axios.get('/api/proyecto/evaluacionAnexoXXX/criterios/asesor_externo')
            .then(res => {
                if(res.status === 200){
                    // console.warn('cri', res.data)
                    this.setState({
                        criterios_evaluacion: res.data,
                        visibleEvaluacionAsesorExterno: true,
                        visibleEvaluacionSeguimientoAsesorExterno: false
                    })
                }else{
                    message.warn('Error al realizar petición de criterios de evaluación, favor de reportar al administrador.')
                }
            })
        }
        
    }
    showEvaluacionSeguimientoAsesorExterno = (alumno) => {
        alert(alumno);
        axios.get('/api/proyecto/evaluacionAnexoXXIX/criterios/asesor_externo/')
            .then(res => {
                if(res.status === 200){
                    // console.warn('cri', res.data)
                    this.setState({
                        visibleEvaluacionAsesorExterno: false,
                        criterios_evaluacion_seguimiento: res.data,
                        visibleEvaluacionSeguimientoAsesorExterno: true
                    })
                }else{
                    message.warn('Error al realizar petición de criterios de evaluación, favor de reportar al administrador.')
                }
            })
    }
    autorizarCartaDeLiberacionAsesorExterno = (check, id_proyecto) => {
        axios.put('/api/proyecto/autorizar_carta_liberacion/asesor_externo', {
            id_proyecto,
            autorizar: check
        }).then(res => {
            if(res.status === 200){
                message.success('Se ha actualizado la autorización de la carta de liberación.')
            }else{
                message.warn('Error al autorizar la carta de liberación consultar al administrador.')
            }
        })
    }
    updateProyecto = () => {
        this.props.updateProyecto();
    }
    render(){
        const {criterios_evaluacion, visibleEvaluacionAsesorExterno, proyecto, usuario, renderSeguimiento, visibleEvaluacionSeguimientoAsesorExterno, criterios_evaluacion_seguimiento} = this.state
        // console.warn(usuario);
        // console.log('alvvvv', proyecto);
        return (
            <div>
                

                <h2>Proyecto de residencia</h2>
                <p style={{marginTop: 20}}>Nombre: </p>
                <Input style={{marginTop: 5}} value={`${proyecto.anteproyecto.nombre}`} readOnly />
                <p style={{marginTop: 20}}>Objetivo general: </p>
                <Input style={{marginTop: 5}} value={`${proyecto.anteproyecto.objetivo_general}`} readOnly />
                {
                    proyecto.anteproyecto.alumno.plan_estudios === '2015-2016' &&
                    <Row gutter={16}>
                        {
                            proyecto.seguimientos_proyecto.map((seguimiento, i) => {
                                return (
                                    <Col key={uuid.v4()} xs={24} lg={24}>
                                        <h2 style={{marginTop: 20, marginBottom: 10}} className="border-top" >{`Seguimiento ${(i+1)}`}</h2>
                                        {seguimiento.url_seguimiento ? 
                                            <div style={{marginTop: 10, marginBottom: 10}}>
                                                <p>Link del seguimiento: </p>
                                                <Upload 
                                                    defaultFileList= {
                                                        [{
                                                            uid: -2,
                                                            name: 'seguimiento de residencia',
                                                            status: 'done',
                                                            url: seguimiento.url_seguimiento
                                                        }]
                                                    }
                                                />
                                            </div>
                                        : 
                                            <Alert style={{marginTop: 10, marginBottom: 10}} message="El alumno no ha subido el avance de su seguimiento de residencia" type="warning" showIcon/>
                                        }
                                        {
                                            seguimiento.url_seguimiento
                                            ?
                                                <div style={{marginTop: 10, marginBottom: 10}}>
                                                    <Button key={uuid.v4()} style={{marginBottom: 30}} onClick={() => this.showEvaluacionSeguimientoAsesorExterno(proyecto.anteproyecto.alumno)} icon="bars" type="primary">Realizar evaluación</Button>
                                                    <FormEvaluacionSeguimiento key={uuid.v4()} seguimiento={seguimiento} visible={visibleEvaluacionSeguimientoAsesorExterno} criterios_evaluacion={criterios_evaluacion_seguimiento}/>
                                                </div>
                                            :
                                                <Alert style={{marginTop: 10, marginBottom: 10}} message="El alumno debe subir su avance del seguimiento de residencia para continuar con el proceso de evaluación" type="warning" showIcon/>
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Row>
                }
                <h2 style={{marginTop: 20}} className="border-top" >Seguimiento final</h2>
                <Row gutter={20}>
                    <Col xs={24} lg={24} style={{marginTop: 20, marginBottom: 30}}>
                        {proyecto.url_informe_tecnico ? 
                            <div>
                                <p>Link del informe técnico: </p>
                                <Upload 
                                    defaultFileList= {
                                        [{
                                            uid: -2,
                                            name: 'informe_tecnico',
                                            status: 'done',
                                            url: proyecto.url_informe_tecnico
                                        }]
                                    }
                                />
                            </div>
                        : 
                            <Alert message="El alumno no ha subido su informe técnico" type="warning" showIcon/>
                        }
                    </Col>
                    <Col xs={24} lg={24}>
                        {
                            proyecto.url_informe_tecnico 
                            ?
                                <div>
                                    <Button style={{marginBottom: 30}} onClick={() => this.showEvaluacionAsesorExterno(proyecto.anteproyecto.alumno)} icon="bars" type="primary">Realizar evaluación</Button>
                                    <h4 style={{marginBottom: 10}}>Autorizar carta de liberación</h4>
                                    <Tooltip title={(proyecto.id_evaluacion_asesor_externo === null)?"Antes de autorizar la carta de liberación debe realizar la evaluación.":""}>
                                        <Switch disabled={(proyecto.id_evaluacion_asesor_externo === null)?true:false} defaultChecked={proyecto.autorizar_carta_liberacion_asesor_externo} checkedChildren="Autorizado" onChange={(e) => this.autorizarCartaDeLiberacionAsesorExterno(e, proyecto.id)} unCheckedChildren={<Icon type="cross" />}/>
                                    </Tooltip>
                                </div>
                                
                            :
                                <Alert message="El alumno debe subir su informe técnico para continuar con el proceso de evaluación" type="warning" showIcon/>
                        }
                    </Col>
                </Row>
                <FormEvaluacion updateProyecto={this.updateProyecto.bind(this)} proyecto={proyecto} visible={visibleEvaluacionAsesorExterno} criterios_evaluacion={criterios_evaluacion}/>

            </div>
        )
    }
}