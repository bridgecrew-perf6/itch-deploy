import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input, Radio,Select, Icon } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

import axios from 'axios';

const CreateFormEmpresa = Form.create()(
    (props => {
        const { visible, onCancel, onCreate, form, remove, add} = props;
        const { getFieldDecorator, getFieldValue} = form;
        const prefixSelectorTitulo = getFieldDecorator('titulo', {
            initialValue: 'ING.',
          })(
            <Select style={{ width: 60 }}>
              <Option value="ING.">ING</Option>
              <Option value="DR.">DR</Option>
            </Select>
          );

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Carrera' : ''}
                required={false}
                key={k}
                >
                {getFieldDecorator(`carrera-${k}`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{
                    required: true,
                    whitespace: true,
                    message: "Agregue la carrera o elimine este campo.",
                    }],
                })(
                    <Input placeholder="Nombre de la carrera" style={{ width: '60%', marginRight: 8 }} />
                )}
                {keys.length > 1 ? (
                    <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    disabled={keys.length === 1}
                    onClick={() => remove(k)}
                    />
                ) : null}
                </FormItem>
            );
        });
        return(
            <Modal
                visible={visible}
                title="Agregar nueva empresa"
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
                    <FormItem label="Nombre del jefe departamento">
                        {getFieldDecorator('nombre_jefe_departamento', {
                            rules: [{required: true, message: 'El departamento debe tener un jefe de partamento.'}]
                        })(<Input addonBefore={prefixSelectorTitulo} style={{ width: '100%' }} placeholder="Nombre completo del jefe de departamento"/>)}
                    </FormItem>
                    <FormItem
                        label="Correo del jefe de departamento"
                    >
                        {getFieldDecorator('correo_jefe_departamento', {
                            rules: [{type: 'email',message: 'El correo no es correcto'},{required: true, message: 'Necesita su correo para autentificarse en el sistema.'}]
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}} />} type="email" placeholder="Ingrese el correo electronico del jefe de departamento" />
                        )}
                    </FormItem>
                    {/* CARRERAS */}
                    {formItems}
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={add} style={{ width: '60%' }}>
                            <Icon type="plus" /> Agregar carrera
                        </Button>
                    </FormItem>
                </Form>

            </Modal>
        );
    })
)

let uuid = 0;
export default class FormEmpresa extends Component{
   
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
    remove = (k) => {
        const form = this.form;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }
    add = () => {
        uuid++;
        const form = this.form;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
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
            console.log('Received values of form: ', values);
            form.resetFields();
            // crear post al servidor
            axios.post('/api/departamento', {
                nombre: values.nombre_departamento,
            }).then((res) => {

            }).catch((err) => {
                
            })

            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render(){
        return(
            <div>
                <CreateFormEmpresa
                ref={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                remove={this.remove}
                add={this.add}
                />
            </div>
        )
    }
}
