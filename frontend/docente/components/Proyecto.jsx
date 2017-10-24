import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button, Row, Col, Upload, Modal, Tooltip} from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Item } = Form;

export default class Proyecto extends Component{

    constructor(props){
        super(props);
        this.state = {
            proyecto: props.proyecto
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            proyecto: nextProps.proyecto
        })
    }

    render(){
        const {proyecto} = this.state
        // console.warn(proyecto);
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
                <Row>
                    <Col xs={24} lg={12}>
                        <Item label={(
                                <span>
                                    Plan de trabajo&nbsp;
                                    <Tooltip title={`Ultima fecha de actualización: ${moment(proyecto.updatedAt).utc().format('ll')}`}>
                                        <Icon type="clock-circle-o"/>
                                    </Tooltip>
                                </span>
                            )}>
                            <Upload
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
                    <Col xs={24} lg={12}>
                        <h3>Observaciones del plan de trabajo</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}