import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button, Row, Col, Upload, Modal, Tooltip, Table, Switch, message, Tabs} from 'antd';
import axios from 'axios';
import moment from 'moment';
import uuid from 'uuid';
const { Item } = Form;
const TabPane = Tabs.TabPane;



// Components
import FormAddObservacion from '../components/FormAddObservacion.jsx';
import FormAddSolucion from '../components/FormAddSolucion.jsx';

export default class Proyecto extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuario: props.usuario,
            proyecto: props.proyecto,
            visibleAddObservacion: false,
            tipo_observacion: '',
            observaciones: [],
            asesorias: [],
            visibleAddSolucion: false,
            id_asesoria: null
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            usuario: nextProps.usuario,
            proyecto: nextProps.proyecto,
            visibleAddObservacion: false,
            tipo_observacion: '',
            observaciones: [],
            asesorias: [],
            visibleAddSolucion: false,
            id_asesoria: null
        })
    }
    componentWillMount(){
        this.updateObservaciones();
    }
    updateObservaciones(){
        const {proyecto} = this.state;
        axios.get(`/api/proyecto/${proyecto.id}/observaciones`)
            .then(res => {
                
                if(res.status === 200){
                    // console.warn('=>', res.data)
                    this.setState({
                        visibleAddObservacion: false,
                        observaciones: res.data
                    })
                }
            })
    }
    showAgregarObservacionPlanTrabajo = () => {
        const {proyecto} = this.state;
        this.setState({
            tipo_observacion: 'plan_de_trabajo',
            visibleAddObservacion: true
        })        
    }
    showAgregarObservacionCronograma = () => {
        const {proyecto} = this.state;
        this.setState({
            tipo_observacion: 'cronograma',
            visibleAddObservacion: true
        })        
    }
    onChangeObservacion = (id_observacion, solucionada) => {
        axios.put('/api/proyecto/observacion', {
            id_observacion,
            solucionada
        }).then(res => {
            if(res.status === 200){
                message.success('Los cambios se han guardado.')
            }else{
                message.error('No se han guardado los cambios, reportar error al administrador.')
            }
        })
    }
    onChangeTab = (key) => {
        const {proyecto} = this.state;
        if(key === "2"){
            axios.get(`/api/proyecto/${proyecto.id}/asesorias`)
                .then(res => {
                    if(res.status === 200){
                        this.setState({
                            visibleAddObservacion: false,
                            asesorias: res.data
                        })
                    }
                })
        }
        
    }
    showAddSolucion = (id_asesoria) => {
        this.setState({
            visibleAddSolucion: true,
            id_asesoria
        })
    }
    checkSolucion = (check, id_solucion) => {
        // alert(check+'=>'+id_solucion);
        axios.put('/api/proyecto/asesoria/solucion_recomendada', {
            id_solucion,
            solucionado: check
        }).then(res => {
            if(res.status === 200){
                message.success('Se ha actualizado la solución.')
            }else{
                message.error('Surgio un error al actualizar la solución. favor de reportarlo con el administrador.')
            }
        })
    }
    checkPermitirGenerarFormato = (check, id_asesoria) => {
        axios.put('/api/proyecto/asesoria_autorizar_formato', {
            permitir_generar_formato: check,
            id_asesoria
        }).then(res => {
            if(res.status === 200){
                message.success('Se ha realizado el cambio de autorizar el formato de asesoria')
            }else{
                message.error('Surgio un error al actualizar la autorización de la asesoria, favor de reportarlo con el administrador.')
            }
        })
            
    }
    showSoluciones = (id_asesoria) => {
        axios.get(`/api/proyecto/asesoria/${id_asesoria}/soluciones_recomendadas`)
            .then(res => {
                if(res.status === 200){
                    console.warn('soluciones', res.data)
                    const columnsSolucionesRecomendadas = [
                        {
                            title: 'Solucionado',
                            dataIndex: 'solucionado',
                            key: 'solucionado',
                            render: (text, record) => (
                                <Switch defaultChecked={record.solucionado} checkedChildren="Solucionado" onChange={(e) => this.checkSolucion(e, record.id)} unCheckedChildren={<Icon type="cross" />}/>
                            )
                        },
                        {
                            title: 'Solución',
                            dataIndex: 'solucion',
                            key: 'solucion',
                        }
                    ]
                    const soluciones = res.data.map((solucion, index) => {
                        return {
                            key: index,
                            id: solucion.id,
                            solucionado: solucion.solucionado,
                            solucion: solucion.solucion
                        }
                    }
                    )
                    Modal.info({
                        width: 800,
                        title: 'Soluciones recomendadas',
                        content: (
                            <div>
                                <Table size="small" columns={columnsSolucionesRecomendadas} dataSource={soluciones} pagination={{ pageSize: 5 }}  />
                            </div>
                        ),
                        onOk(){},
                    })
                }
            })
    }
    render(){
        const {proyecto, visibleAddObservacion, tipo_observacion, usuario, observaciones, asesorias, id_asesoria, visibleAddSolucion} = this.state
        // console.warn(usuario);
        const observacionesPlanTrabajo = observaciones.filter(obs => obs.tipo==='plan_de_trabajo').map((observacion) => {
            return {
                key: uuid.v1(),
                id: observacion.id,
                observacion: observacion.observacion,
                solucionada: observacion.solucionada
            }
        })

        const observacionesCronograma = observaciones.filter(obs => obs.tipo==='cronograma').map((observacion) => {
            return {
                key: uuid.v1(),
                id: observacion.id,
                observacion: observacion.observacion,
                solucionada: observacion.solucionada
            }
        })
        const columnsPlanTrabajo = [
            
            {
                title: 'Solucionada',
                dataIndex: 'solucionada',
                key: 'solucionada',
                render: (text, record) => (
                    <Switch  onChange={(check) => this.onChangeObservacion(record.id, check)} defaultChecked={record.solucionada} checkedChildren="Solucionada" unCheckedChildren={<Icon type="cross" />} />
                )
            },
            {
                title: 'Observación',
                dataIndex: 'observacion',
                key: 'observacion'
            }
        ]

        const columnsAsesorias = [
            {
                className: 'center-text',
                title: 'Fecha',
                dataIndex: 'fecha',
                key: 'fecha',
            },
            {
                className: 'center-text',
                title: 'Temas a asesorar',
                dataIndex: 'temas_a_asesorar',
                key: 'temas_a_asesorar',

            },
            {
                className: 'center-text',
                title: 'Avance',
                dataIndex: 'url_avance',
                key: 'url_avance',
                render: (text, record) => (
                    <a href={record.url_avance} target="_blank">Archivo de avance<Icon type="file-pdf"/></a>
                )
            },
            {
                className: 'center-text',
                title: 'Soluciones recomendadas',
                dataIndex: 'soluciones_recomendadas',
                key: 'soluciones_recomendadas',
                render: (text, record) => (
                    <span>
                        <Button style={{marginLeft: 2, marginRight: 2}} icon="bars" onClick={() => this.showSoluciones(record.id)}>Soluciones</Button>
                        <Button style={{marginLeft: 2, marginRight: 2}} icon="plus" onClick={() => this.showAddSolucion(record.id)}>Agregar solución</Button>
                    </span>
                )
            },
            {
                className: 'center-text',
                title: 'Generar formato',
                dataIndex: 'permitir_generar_formato',
                key: 'permitir_generar_formato',
                render: (text, record) => (
                    <Switch defaultChecked={record.permitir_generar_formato} checkedChildren="Autorizado" onChange={(e) => this.checkPermitirGenerarFormato(e, record.id)} unCheckedChildren="No autorizado"/>                    
                )
            }
        ]
        const _asesorias = asesorias.map((asesoria) => {
            return {
                key: uuid.v1(),
                id: asesoria.id,
                fecha: moment(asesoria.fecha, 'YYYY-MM-DD').format('ll'),
                temas_a_asesorar: asesoria.temas_a_asesorar,
                url_avance: asesoria.url_avance,
                soluciones_recomendadas: 'on',
                permitir_generar_formato: asesoria.permitir_generar_formato
            }
        })
        
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={(key) => this.onChangeTab(key) }>
                    <TabPane tab={<span><Icon type="book" />Proyecto</span>} key="1">
                        <Form>
                            <Item label="Título: ">
                                <Input value={proyecto.anteproyecto.nombre}  readOnly />
                            </Item>
                            <Item label="Objetivo general: ">
                                <Input value={proyecto.anteproyecto.objetivo_general}  readOnly />
                            </Item>
                            
                            <Item label="Anteproyecto: ">
                                <Upload
                                    listType="picture-card"
                                    fileList={[{
                                        uid: -1,
                                        name: 'anteproyecto.pdf',
                                        status: 'done',
                                        url: `/api/anteproyecto/pdf/${proyecto.anteproyecto.path_file_anteproyecto}`
                                    }]}
                                />
                            </Item>
                        </Form>
                        {/* divider */}
                        <Row className="border-top">
                            <Col xs={24} lg={6} >
                                <h2 style={{marginBottom: 20}}>Plan de trabajo</h2>
                                <Item  label={(
                                        <span>
                                            Plan de trabajo&nbsp;
                                            <Tooltip title={`Ultima fecha de actualización: ${moment(proyecto.updatedAt).utc().format('ll')}`}>
                                                <Icon type="clock-circle-o"/>
                                            </Tooltip>
                                        </span>
                                    )}>
                                    <Upload
                                        className="file-preview"
                                        style={{width: 600}}
                                        listType="picture-card"
                                        fileList={[{
                                            uid: -1,
                                            name: 'plan_de_trabajo.pdf',
                                            status: 'done',
                                            url: `/api/plan_de_trabajo/pdf/${proyecto.filename_plan_trabajo}`
                                        }]}
                                        onRemove={false}
                                    />
                                </Item>
                            </Col>
                            <Col xs={24} lg={18}>
                                <Button style={{marginBottom: 10, marginTop: 45}}  icon="plus" onClick={this.showAgregarObservacionPlanTrabajo}>Agregar observación</Button>
                                <Table title={() => 'Observaciones de plan de trabajo'} columns={columnsPlanTrabajo} dataSource={observacionesPlanTrabajo} pagination={{ pageSize: 4 }} />
                            </Col>
                        </Row>
                        <Row className="border-top">
                            <Col xs={24} lg={6} >
                                <h2 style={{marginBottom: 20}}>Cronograma de actividades</h2>
                                <Item  label={(
                                        <span>
                                            Cronograma de actividades&nbsp;
                                            <Tooltip title={`Ultima fecha de actualización: ${moment(proyecto.updatedAt).utc().format('ll')}`}>
                                                <Icon type="clock-circle-o"/>
                                            </Tooltip>
                                        </span>
                                    )}>
                                    <Upload
                                        className="file-preview"
                                        style={{width: 600}}
                                        listType="picture-card"
                                        fileList={[{
                                            uid: -1,
                                            name: 'cronograma.pdf',
                                            status: 'done',
                                            url: `/api/cronograma/pdf/${proyecto.filename_cronograma}`
                                        }]}
                                        onRemove={false}
                                    />
                                </Item>
                            </Col>
                            <Col xs={24} lg={18}>
                                <Button style={{marginBottom: 10,  marginTop: 45}}  icon="plus" onClick={this.showAgregarObservacionCronograma}>Agregar observación</Button>
                                <Table title={() => 'Observaciones del cronograma de actividades'} columns={columnsPlanTrabajo} dataSource={observacionesCronograma} pagination={{ pageSize: 4 }} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<span><Icon type="solution" />Asesorias</span>} key="2">
                        <Row>
                            <Col xs={24} lg={24}>
                                <Table title={() => 'Asesorias'} columns={columnsAsesorias} dataSource={_asesorias} pagination={{ pageSize: 5 }} scroll={{ x: 1200 }} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab={<span><Icon type="calendar" />Seguimientos</span>} key="3">
                    </TabPane>
                </Tabs>
                <FormAddObservacion updateObservaciones={this.updateObservaciones.bind(this)} id_proyecto={proyecto.id} tipo={tipo_observacion} usuario={usuario} visible={visibleAddObservacion}/>
                <FormAddSolucion  id_asesoria={id_asesoria}  visible={visibleAddSolucion}/>

            </div>
        )
    }
}