import React, {Component} from 'react';
import {message, Modal, Row, Col, Select, Table, Button} from 'antd';
const Option = Select.Option;

import axios from 'axios';
import moment from 'moment';

// components
import FormAddAlumno from '../alumno/components/FormAddAlumno.jsx';

export default class GestionPeriodoDeResidencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            departamento: props.departamento,
            carreraSeleccionada: null,
            visible_add_alumno: false,
            id_periodo: null
        }
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
                    this.setState({
                        carreraSeleccionada: res.data,
                        visible_add_alumno: false
                    })
                }else{
                    message.warning('Verificar los docentes asignados.')
                }
            })   
    }
    render(){
        const {departamento, carreraSeleccionada, visible_add_alumno, id_periodo} = this.state
        const periodos = carreraSeleccionada ? carreraSeleccionada.periodos.map((periodo, index) => {
                return { 
                    id: periodo.id, 
                    key: index,
                    periodo: periodo.periodo,
                    ciclo: periodo.ciclo,
                    fecha_periodo: `${periodo.fecha_inicio} - ${periodo.fecha_fin}`,
                    fecha_entrega_anteproyecto: `${periodo.fecha_inicio_entrega_anteproyecto} - ${periodo.fecha_fin_entrega_anteproyecto}`,
                    acciones: (moment().format('YYYY-MM-DD') >= periodo.fecha_inicio_entrega_anteproyecto && moment().format('YYYY-MM-DD') <= periodo.fecha_fin_entrega_anteproyecto) ? true : false
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
                dataIndex: 'fecha_entrega_anteproyecto'
            },{
                className: 'center-text',
                title: 'Acciones',
                key: 'acciones',
                dataIndex: 'Acciones',
                render: (text, record) => (
                    <span>
                        {console.log(record.acciones)}
                        {console.log(moment().format('YYYY-MM-DD'))}
                        {(record.acciones === true) ? <Button style={{marginRight: 5}} icon="user-add" onClick={() => this.showAddAlumno(record.id)}>Candidato a residente</Button> : <p style={{color:'#ff5757' }}>Deshabilitado, revisar fechas.</p>}
                    </span>
                )
            }
        ]
        return (
            <Row gutter={16}>
                <Col xs={24} lg={6}>
                        <p>Seleccione la carrera: </p>
                        <Select
                            placeholder="Seleccione una carrera"                           
                            style={{width: '100%'}}
                            onChange={this.handleChageCarrera}
                        > 
                            {departamento.carreras.map((carrera, index) => {return <Option key={index} value={`${carrera.id}`} >{carrera.nombre}</Option>})}
                        </Select>
                </Col>
                <Col xs={24} lg={18}>
                    <Table bordered title={() => 'Gestión de periodos'} dataSource={periodos} className="full-width" columns={columns} pagination={{ pageSize: 8 }}  scroll={{ x: 800 }} />
                </Col>
                
                <FormAddAlumno visible={visible_add_alumno} carrera={carreraSeleccionada} id_periodo={id_periodo}/>
            </Row>

            
        )
    }
}