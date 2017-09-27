import React, {Component} from 'react';

import { Select, Row, Col} from 'antd';
const Option = Select.Option;


// components
import GestionarCarrera from './components/GestionarCarrera.jsx';

export default class Departamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            departamento: props.departamento,
            carrera: null
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            departamento: nextProps.departamento,
            carrera: null
        })
    }
    handleChageCarrera = (value) => {
        const {departamento} = this.state;
        const carrera = departamento.carreras.find((carrera) => carrera.nombre === value);
        this.setState({
            carrera: <GestionarCarrera carrera={carrera} docentes={departamento.docentes}/>
        })
    }
    render(){
        const {departamento, carrera} = this.state;
        return (
            <div>
                <Row>
                    <Col xs={24} lg={6}>
                        <Select
                            placeholder="Seleccione una carrera"                           
                            style={{width: '100%'}}
                            onChange={this.handleChageCarrera}
                        > 
                            {departamento.carreras.map((carrera, index) => {return <Option key={index} value={`${carrera.nombre}`} >{carrera.nombre}</Option>})}
                        </Select>
                    </Col>
                </Row>
                {carrera}
            </div>
        )
    }
}