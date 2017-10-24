import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button, Row, Col, Upload, Modal, Tooltip, Table, Switch, message} from 'antd';
import axios from 'axios';
import moment from 'moment';
import uuid from 'uuid';
const { Item } = Form;



// Components
import FormAddObservacion from '../components/FormAddObservacion.jsx';

export default class Proyecto extends Component{

    constructor(props){
        super(props);
        this.state = {
            usuario: props.usuario,
            proyecto: props.proyecto,
            visibleAddObservacion: false,
            tipo_observacion: '',
            observaciones: []
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            usuario: nextProps.usuario,
            proyecto: nextProps.proyecto,
            visibleAddObservacion: false,
            tipo_observacion: '',
            observaciones: []
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
                    console.warn('=>', res.data)
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
    render(){
        const {proyecto, visibleAddObservacion, tipo_observacion, usuario, observaciones} = this.state
        // console.warn(usuario);
        const observacionesPlanTrabajo = observaciones.filter(obs => obs.tipo==='plan_de_trabajo').map((observacion) => {
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

        return (
            <div>
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
                        <Button style={{marginBottom: 10}} type="primary" icon="exclamation-circle-o" onClick={this.showAgregarObservacionPlanTrabajo}>Agregar observación</Button>
                        <Table title={() => 'Observaciones de plan de trabajo'} columns={columnsPlanTrabajo} dataSource={observacionesPlanTrabajo} pagination={{ pageSize: 4 }} />
                    </Col>
                </Row>
                <FormAddObservacion updateObservaciones={this.updateObservaciones.bind(this)} id_proyecto={proyecto.id} tipo={tipo_observacion} usuario={usuario} visible={visibleAddObservacion}/>
            </div>
        )
    }
}