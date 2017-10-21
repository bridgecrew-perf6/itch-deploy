import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button, Row, Col} from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Item } = Form;

// components
import WrappedFormPlanTrabajo from '../../periodo_residencia/plan_trabajo.jsx';

export default class ProyectoDeResidencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            proyecto: props.proyecto
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            proyecto: nextProps.proyecto
        })
    }
    render(){
        const {proyecto} = this.state;
        console.log('proyecto => ', this.state.proyecto)
        return (
            <div>
                <Form>
                    <Item label="Título">
                        <Input value={proyecto.anteproyecto.nombre}  readOnly />
                    </Item>
                    <Item label="Objetivo general">
                        <Input value={proyecto.anteproyecto.objetivo_general}  readOnly />
                    </Item>
                    
                    <Item label="Anteproyecto">
                        <a style={{color: '#4da1ff'}} href={`/api/anteproyecto/pdf/${proyecto.anteproyecto.path_file_anteproyecto}`} target="_blank"> Ver anteproyecto <Icon type="file-pdf" style={{color: '#4da1ff'}}  /></a>
                    </Item>
                </Form>
                {/* divider */}
                <Row>
                    <Col xs={24} lg={24}>
                        <a style={{color: '#4da1ff'}} href="/plantillas/plan_de_trabajo.docx">Plantilla de plan de trabajo <Icon type="cloud-download"/></a>
                    </Col>
                    <Col xs={24} lg={12}>
                        <WrappedFormPlanTrabajo proyecto={proyecto}/>
                    </Col>
                    <Col xs={24} lg={12}>

                    </Col>
                </Row>
            </div>
        )
    }
}