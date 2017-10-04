import React, {Component} from 'react';
import {message, Modal, Row, Col, Select, Table, Button, Input, Icon, Popconfirm, Badge} from 'antd';
const {Option, OptGroup}  = Select;

import axios from 'axios';
import PDF2 from 'react-pdf-js-infinite';

export default class Dictamen extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: props.usuario,
            departamento: props.departamento,
            renderDictamen: null
        }
    }
    render(){
        const {departamento, renderDictamen} = this.state;
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
                {renderDictamen}  
            </div>
        )
    }
}