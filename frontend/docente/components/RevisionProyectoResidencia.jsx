import React, {Component} from 'react';

import {Select, Row, Col} from 'antd';
const {Option} = Select

import axios from 'axios';

// Components
import Proyecto from '../components/Proyecto.jsx'

export default class RevisionProyectoResidencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            proyectos: props.proyectos,
            renderProyecto: null
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            proyectos: nextProps.proyectos,
            renderProyecto: null
        })
    }

    onChangeResidente = (id_alumno) => {
        axios.get(`/api/alumno/${id_alumno}/proyecto`)
            .then((res) => {
                if(res.status === 200){
                    // console.warn('proyecto', res.data)
                    this.setState({
                        renderProyecto: <Proyecto proyecto={res.data}/>
                    })
                }
            })
    }
    render(){
        const {proyectos, renderProyecto} = this.state
        // console.warn(')>', proye)
        return (
            <Row>
                <Col xs={24} lg={24}>
                    <Select 
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        placeholder="Seleccione al residente"
                        onChange={this.onChangeResidente}
                        style={{width: 400}}
                    >
                        {proyectos.map((proyecto, index) => {
                            return (
                                <Option key={index} value={`${proyecto.anteproyecto.alumno.id}`}>{proyecto.anteproyecto.alumno.nombre}</Option>
                            )
                        })}
                    </Select>
                </Col>
                {renderProyecto}
            </Row>
        )
    }
}
