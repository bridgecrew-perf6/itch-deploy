import React, {Component} from 'react';
import {Card, Icon, Form, Input, Button} from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Item } = Form;


export default class ProyectoDeResidencia extends Component{

    render(){
        return (
            <div>
                <Form>
                    <Item label="Título">
                        <Input value="Aqui va el titulo"  readOnly />
                    </Item>
                    <Item label="Objetivo">
                        <Input value="Aqui va el objetivo" readOnly />
                    </Item>
                    <Button type="primary" icon="file-pdf">
                        Anteproyecto
                    </Button>
                </Form>
                {/* divider */}
                
            </div>
        )
    }
}