import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input, Radio,Select, Icon, message } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

import axios from 'axios';

const CreateFormDepartamento = Form.create()(
    (props => {
        const { visible, onCancel, onCreate, form} = props;
        const { getFieldDecorator} = form;

        return(
            <Modal
                visible={visible}
                title="Agregar nuevo departamento"
                okText="Guardar"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Nombre del departamento">
                        {getFieldDecorator('nombre_departamento', {
                            rules: [{required: true, message: 'El departamento debe tener un nombre.'}]
                        })(<Input placeholder="Nombre del departamento"/>)}
                    </FormItem>
                </Form>

            </Modal>
        );
    })
)

export default class FormDepartamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
        }
    }
    componentWillReceiveProps(nextProps) {
        const {visible} = nextProps;
        this.setState({
            visible: visible
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            // console.log('Received values of form: ', values);
            form.resetFields();
            // crear post al servidor
            axios.post('/api/departamento', {
                nombre: values.nombre_departamento,
            }).then((res) => {
                console.log(res)
                if(res.status === 200){
                    message.success("Departamento agregado satisfactoriamente")
                    this.setState({ visible: false });
                }else{
                    message.info('Revisar los siguientes campos')
                    res.data.errores.map((err) => {
                        message.error(res.data.errores, 10);                    
                    })
                }
            }).catch((err) => {
                message.error(err);                                    
            })
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render(){
        return(
            <div>

                <CreateFormDepartamento
                ref={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                />
            </div>
        )
    }
}
