// Dependencies
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col, Card, Layout} from 'antd';
const {Content, Header} = Layout;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



// Componentes
import WrappedLoginForm from './components/FormLogin.jsx';

export default class Login extends Component{
    render(){
        return(
            <div>
                <Row type="flex" justify="center" align="middle" style={{height: '100%'}}>
                    <Col lg={16} xs={22} >
                        <Card style={{padding:0, borderBottomRightRadius: 7, borderBottomLeftRadius: 7, borderTopLeftRadius: 7, borderTopRightRadius: 7}}>
                            <Row type="flex" justify="left" align="top" style={{ padding: 0}} className="full-height">
                                <Col span={12} style={{backgroundColor: '#4da1ff'}}>
                                    <h2 style={{marginBottom: 10, color: 'white', fontStyle:'Bold', justifyContent: 'center'}}> Sistema de seguimiento de residencias del Instituto Tecnológico de Chilpancingo </h2>
                                </Col>
                                <Col span={12}>
                                    <WrappedLoginForm/>
                                </Col>
                            </Row>
                        </Card>
                    </Col> 
                </Row>
            </div>
                
        )
    }
}
