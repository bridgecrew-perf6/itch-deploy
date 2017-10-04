import React, {Component} from 'react';
import {message, Modal, Row, Col, Select, Table, Button, Input, Icon, Popconfirm, Badge} from 'antd';
const {Option, OptGroup}  = Select;
const ButtonGroup = Button.Group;


import axios from 'axios';
import PDF2 from 'react-pdf-js-infinite';

export default class Dictamen extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: props.usuario,
            departamento: props.departamento,
            periodo: null,
            dictamen_anteproyectos: null
        }
    }
    handleChangePeriodo = (id_periodo) => {
        axios.get(`/api/periodo/${id_periodo}/dictamen`)
        .then(res =>{
            if(res.status === 200){
                console.log(res)
                if(res.data.anteproyectos != null){
                    const dictamen_anteproyectos = res.data.anteproyectos.map((anteproyecto, index) => {
                        return {
                            key: (index + 1),
                            id: anteproyecto.id,
                            no_control_alumno: anteproyecto.alumno.no_control,
                            nombre_alumno: `${anteproyecto.alumno.nombre} ${anteproyecto.alumno.ap_paterno} ${anteproyecto.alumno.ap_materno}`,
                            sexo_alumno: anteproyecto.alumno.sexo,
                            nombre_anteproyecto: anteproyecto.nombre,
                            nombre_titular_empresa: `${anteproyecto.asesor_externo.empresa.nombre_titular} \n ${anteproyecto.asesor_externo.empresa.puesto_titular}` ,
                            asesor_interno: `${anteproyecto.asesor_interno.titulo} ${anteproyecto.asesor_interno.nombre} ${anteproyecto.asesor_interno.ap_paterno} ${anteproyecto.asesor_interno.ap_materno}`,
                            asesor_externo: anteproyecto.asesor_externo.nombre,
                            dictamen: anteproyecto.dictamen.toUpperCase(),
                            fecha_dictamen: anteproyecto.updatedAt
                        }
                    })
                    this.setState({
                        periodo: res.data,
                        dictamen_anteproyectos
                    })
                }else{
                    this.setState({
                        periodo: res.data,
                        dictamen_anteproyectos: null
                    })
                }
            }
        })
        
    }
    render(){
        const {departamento, dictamen_anteproyectos, periodo} = this.state;
        const columns = [
            {
                width: 50,
                fixed: 'left',
                className: 'center-text',
                title: 'NUM',
                dataIndex: 'key',
                key: 'key'
            },
            {
                width: 100,
                fixed: 'left',
                className: 'center-text',
                title: 'CONTROL',
                dataIndex: 'no_control_alumno',
                key: 'no_control_alumno'
            },
            {
                width: 200,
                fixed: 'left',
                className: 'center-text',
                title: 'NOMBRE DEL ESTUDIANTE',
                dataIndex: 'nombre_alumno',
                key: 'nombre_alumno'
            },
            {
                className: 'center-text',
                title: 'S',
                dataIndex: 'sexo_alumno',
                key: 'sexo_alumno'
            },
            {
                className: 'center-text',
                title: 'ANTEPROYECTO',
                dataIndex: 'nombre_anteproyecto',
                key: 'nombre_anteproyecto',
            },
            {
                className: 'center-text',
                title: 'NOMBRE Y CARGO DEL TITULAR DE LA EMPRESA',
                dataIndex: 'nombre_titular_empresa',
                key: 'nombre_titular_empresa'
            },
            {
                title: 'ASESORES',
                children: [
                    {
                        className: 'center-text',
                        title: 'INTERNO',
                        dataIndex: 'asesor_interno',
                        key: 'asesor_interno'
                    },
                    {
                        className: 'center-text',
                        title: 'EXTERNO',
                        dataIndex: 'asesor_externo',
                        key: 'asesor_externo'
                    }

                ]
            },
            {
                className: 'center-text',
                title: 'DICTAMEN',
                dataIndex: 'dictamen',
                key: 'dictamen'
            },
            {
                className: 'center-text',
                title: 'FECHA DE DICTAMEN',
                dataIndex: 'fecha_dictamen',
                key: 'fecha_dictamen'
            }
        ]
        var renderInformacionPeriodo = null;
        var renderButtonDictamen = null;
        if(periodo != null){
            renderInformacionPeriodo =  <Col xs={24} lg={24}>
                                            <h2 style={{textAlign: 'center'}}>DEPARTAMENTO DE {periodo.carrera.departamento.nombre.toUpperCase()}</h2>
                                            <h3 style={{textAlign: 'center'}}>CARRERA: {periodo.carrera.nombre.toUpperCase()}</h3>
                                        </Col>;
            // indicar si ya se genero que los datos podrian ser incongruentes jeje
            // propuesta solo se puede generar entre la fecha del periodo 
            // ¿Que pasa con lo proyectos que no son aprobados?
            if(periodo.filename_dictamen == null){ // no se ha generado
                renderButtonDictamen = <Button type="primary" icon="file-pdf"> Generar dictamen </Button> 
            }else{ // ya existe jeje
                
                renderButtonDictamen = <ButtonGroup>
                                            <Button icon="file-pdf"> Generar dictamen </Button> 
                                            <Button type="primary" icon="eye-o"> Ver </Button>
                                        </ButtonGroup> ;           
            }
        }
        return (
            <div>
                <Row type="flex">
                    <Col xs={24} lg={6}>
                        <p>Seleccione el periodo</p>
                        <Select 
                            onChange={this.handleChangePeriodo}
                            style={{width: '100%'}}
                        >   
                            {departamento.carreras.map((carrera, i) => {
                                return (
                                    <OptGroup key={i} label={carrera.nombre}>
                                        {carrera.periodos.map((periodo, j) => {
                                            return (<Option key={`${i}-${j}`} value={`${periodo.id}`}>{`${periodo.periodo} ${periodo.ciclo}`}</Option>)
                                        })}
                                    </OptGroup>
                                )
                            })}
                        </Select>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" style={{marginTop: 20}}>
                   {renderInformacionPeriodo}
                </Row>
                <Row type="flex" justify="center" align="middle" style={{marginTop: 20}}>
                    <Col xs={24} lg={24} style={{marginBottom: 20}}>
                        {renderButtonDictamen}
                    </Col>
                    <Col xs={24} lg={24}>
                        <Table bordered title={() => 'Dictamen'} dataSource={dictamen_anteproyectos} className="full-width" columns={columns} pagination={{ pageSize: 8 }}  scroll={{ x: 1700 }} />
                    </Col>
                </Row> 
            </div>
        )
    }
}