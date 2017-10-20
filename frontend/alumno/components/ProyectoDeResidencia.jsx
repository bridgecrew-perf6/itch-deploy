import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button} from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Item } = Form;



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
                    <Button type="primary" icon="file-pdf">
                        <a style={{color: 'white'}} href={`/api/anteproyecto/pdf/${proyecto.anteproyecto.path_file_anteproyecto}`} target="_blank"> Anteproyecto</a>
                    </Button>
                </Form>
                {/* divider */}
                
            </div>
        )
    }
}