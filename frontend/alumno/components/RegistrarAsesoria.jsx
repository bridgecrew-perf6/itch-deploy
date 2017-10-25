import React, {Component} from 'react';

import {Row, Col, Button, Table, Icon, Alert, Badge} from 'antd';
import moment from 'moment';
// components
import FormRegistrarAsesoria from './FormRegistrarAsesoria.jsx';
import uuid from 'uuid';
export default class RegistrarAsesoria extends Component{
    constructor(props){
        super(props);
        this.state = {
            proyecto: props.proyecto,
            visibleRegistrarAsesoria: false,
            usuario: props.usuario
        }
    }
    showAddAsesoria = () => {
        this.setState({
            visibleRegistrarAsesoria: true
        })
    }
    render(){

        const {proyecto, visibleRegistrarAsesoria, usuario} = this.state;
        // console.log('this',proyecto)
        const columnasAsesoria = [
            {
                className: 'center-text',
                title: 'Fecha de asesoria',
                dataIndex: 'fecha',
                key: 'fecha'
            },
            {
                className: 'center-text',
                title: 'Temas a asesorar',
                dataIndex: 'temas_a_asesorar',
                key: 'temas_a_asesorar'
            },
            {
                className: 'center-text',
                title: 'Avance',
                dataIndex: 'url_avance',
                key: 'url_avance',
                render: (text, record) => (
                    <a href={record.url_avance} target="_blank">Avance <Icon type="file-pdf"/></a>
                )
            },
            {
                className: 'center-text',
                title: 'Soluciones recomendadas',
                dataIndex: 'soluciones_recomendadas',
                key: 'soluciones_recomendadas',
                render: (text, record) => (
                    <span>
                        <Badge count={6} >
                            <Button onClick={()=>alert('ver soluciones')}>Ver soluciones</Button>
                        </Badge>
                    </span>
                )
            },
            {
                width: 300,
                className: 'center-text',
                title: 'Formato de asesoria',
                dataIndex: 'formato_asesoria',
                key: 'formato_asesoria',
                render: (text, record) => (
                    <span>
                        {record.asesoria.permitir_generar_formato? 
                            <Button icon="file-pdf" type="primary"> Generar formato</Button>
                            : <Alert message="El asesor interno debe autorizar el formato" type="warning" showIcon />
                        }
                    </span>
                )
            }
        ]
        const asesorias = proyecto.asesorias.map((asesoria, index) => {
            return {
                key: uuid.v1(),
                fecha: moment(asesoria.fecha, 'YYYY-MM-DD').format('ll'),
                asesoria: asesoria,
                temas_a_asesorar: asesoria.temas_a_asesorar,
                url_avance: asesoria.url_avance,
            }
        })
        return(
            <div>
                <Row>
                    <Col xs={24} lg={24}>
                        <Button icon="plus" type="primary" onClick={this.showAddAsesoria}>Agregar asesoria</Button>
                    </Col>
                    <Col xs={24} lg={24}>
                        <Table title={()=> 'Lista de asesorias registradas'} columns={columnasAsesoria} dataSource={asesorias} pagination={{ pageSize: 5 }}/>
                    </Col>
                </Row>
                <FormRegistrarAsesoria proyecto={proyecto} visible={visibleRegistrarAsesoria}/>
            </div>
        )
    }
}