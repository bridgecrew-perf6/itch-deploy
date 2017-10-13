import React, {Component} from 'react';
import {message, Modal, Row, Col, Select, Table, Button, Avatar, DatePicker, Timeline, Icon} from 'antd';
const Option = Select.Option;

import axios from 'axios';
import moment from 'moment';
import uuid from 'uuid';

// component
import FormAddAlumno from '../alumno/components/FormAddAlumno.jsx';

export default class GestionPeriodoDeResidencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            departamento: props.departamento,
            carreraSeleccionada: null,
            visible_add_alumno: false,
            id_periodo: null,
            alumnos_rechazados_por_carrera: []
        }
    }
    showListaCandidatosResidente = (id_periodo) => {
        axios.get(`/api/periodo/${id_periodo}/anteproyectos`)
            .then(res => {
                if(res.status === 200){
                    const candidatos = res.data.map((candidato, index) => {
                        return (
                                <Timeline.Item key={index} color="green" dot={<Icon type="check-circle-o" style={{ fontSize: '16px' }} />}>
                                    {`${candidato.nombre} ${candidato.ap_paterno} ${candidato.ap_materno}`}
                                </Timeline.Item>
                        )
                    })
                    Modal.info({
                        width: 600,
                        title: 'Lista de candidatos a residente del periodo.',
                        content: (
                            <Timeline>
                                {candidatos}
                            </Timeline>),
                        onOk(){}
                    })
                }
            })
        
    }
    showAddAlumno = (id_periodo) => {
        this.setState({
            visible_add_alumno: true,
            id_periodo
        })
    }
    


    handleChageCarrera = (value) => {
        const {departamento} = this.state;
        const carrera = departamento.carreras.find((carrera) => `${carrera.id}` === value);
        axios.get(`/api/carrera/${carrera.id}/periodos`)
            .then(res => {
                if(res.status === 200){
                    // console.log('alv',res.data)
                    axios.get(`/api/alumnos/${carrera.id}/rechazados`)
                        .then(_res => {
                            if(_res.status === 200){
                                this.setState({
                                    alumnos_rechazados_por_carrera: _res.data._alumnos,
                                    carreraSeleccionada: res.data,
                                    visible_add_alumno: false,
                                })
                            }
                        })
                }else{
                    message.warning('Verificar conexión.')
                }
            })   
    }

    handleChangeFechaFinEntregaAnteproyecto = (fecha_fin_entrega_anteproyecto, id_periodo) => {
        axios.put('/api/periodo/fecha_fin_entrega_anteproyecto', {
            fecha_fin_entrega_anteproyecto: fecha_fin_entrega_anteproyecto.format('YYYY-MM-DD'),
            id_periodo
        }).then(res => {
            if(res.status === 200){
                // console.log('alv',res.data)
                message.success('Fecha de entrega de anteproyectos actualizada!')
                window.location.reload();
            }else{
                message.warning('Ups, verificar conexión.')
            }
        }) 
        
    }
    render(){
        const {departamento, carreraSeleccionada, visible_add_alumno, id_periodo, visible_lista_candidatos_residente, alumnos_rechazados_por_carrera} = this.state
        const periodos = carreraSeleccionada ? carreraSeleccionada.periodos.map((periodo, index) => {
                return { 
                    id: periodo.id, 
                    key: uuid.v1(),
                    periodo: periodo.periodo,
                    ciclo: periodo.ciclo,
                    fecha_periodo: `${periodo.fecha_inicio} - ${periodo.fecha_fin}`,
                    fecha_fin: periodo.fecha_fin ,
                    fecha_inicio_entrega_anteproyecto: periodo.fecha_inicio_entrega_anteproyecto,
                    fecha_fin_entrega_anteproyecto:  periodo.fecha_fin_entrega_anteproyecto,
                    acciones: (moment().format('YYYY-MM-DD') >= periodo.fecha_inicio_entrega_anteproyecto && moment().format('YYYY-MM-DD') <= periodo.fecha_fin_entrega_anteproyecto) ? true : false,
                    lista_candidatos: 'sisisi'
                }
        }): null;
        const columns = [
            {
                title: 'Periodo',
                key: 'periodo',
                dataIndex: 'periodo'
            }, {
                title: 'Ciclo',
                key: 'ciclo',
                dataIndex: 'ciclo'
            },
            {
                title: 'Fecha de periodo',
                key: 'fecha_periodo',
                dataIndex: 'fecha_periodo'
            },
            {
                title: 'Fecha entrega anteproyectos',
                key: 'fecha_entrega_anteproyecto',
                dataIndex: 'fecha_entrega_anteproyecto',
                render: (text, record) => (
                    <span>
                        {record.fecha_inicio_entrega_anteproyecto} - <DatePicker onChange={(momentDate, stringDate) => {this.handleChangeFechaFinEntregaAnteproyecto(momentDate, record.id)}} disabledDate={current => (current.format('YYYY-MM-DD') > moment(record.fecha_fin, "YYYY-MM-DD").format('YYYY-MM-DD') || current.format('YYYY-MM-DD') < moment(record.fecha_inicio_entrega_anteproyecto, "YYYY-MM-DD").format('YYYY-MM-DD') ) } format="YYYY-MM-DD"  defaultValue={moment(record.fecha_fin_entrega_anteproyecto, "YYYY-MM-DD")}/>
                    </span>
                )
            },{
                className: 'center-text',
                title: 'Acciones',
                key: 'acciones',
                dataIndex: 'Acciones',
                render: (text, record) => (
                    <span>
                        {(record.acciones === true) ? <Button style={{marginRight: 5}} icon="user-add" onClick={() => this.showAddAlumno(record.id)}>Candidato a residente</Button> : <p style={{color:'#ff5757' }}>Deshabilitado, revisar fechas.</p>}
                    </span>
                )
            }, {
                className: 'center-text',
                title: 'Lista de candidatos',
                key: 'lista_candidatos',
                dataIndex: 'lista_candidatos',
                render: (text, record) => (
                    <span>
                        <Button icon="solution" onClick={() => this.showListaCandidatosResidente(record.id)}></Button>
                    </span>
                )
            }
        ]
        return (
            <Row gutter={16}>
                <Col xs={24} lg={4}>
                        <p>Seleccione la carrera: </p>
                        <Select
                            placeholder="Seleccione una carrera"                           
                            style={{width: '100%'}}
                            onChange={this.handleChageCarrera}
                        > 
                            {departamento.carreras.map((carrera, index) => {return <Option key={index} value={`${carrera.id}`} >{carrera.nombre}</Option>})}
                        </Select>
                </Col>
                <Col xs={24} lg={20}>
                    <Table bordered title={() => 'Gestión de periodos'} dataSource={periodos} className="full-width" columns={columns} pagination={{ pageSize: 8 }}  scroll={{ x: 1000 }} />
                </Col>
                
                <FormAddAlumno visible={visible_add_alumno} carrera={carreraSeleccionada} id_periodo={id_periodo} alumnos_rechazados_por_carrera={alumnos_rechazados_por_carrera}/>
            </Row>

            
        )
    }
}