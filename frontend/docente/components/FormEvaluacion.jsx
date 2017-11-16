import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input, Radio,Select, Icon, message,Slider } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

import axios from 'axios';

const CreateFormEvaluacion = Form.create()(
    (props => {
        const { visible, onCancel, onCreate, form, criterios} = props;
        const { getFieldDecorator} = form;
        return(
            <Modal
                visible={visible}
                title={`Evaluación de residencia profesional`}
                okText="Guardar"
                onCancel={onCancel}
                onOk={onCreate}
                width={600}
                style={{top: 20}}
            >
                <Form layout="vertical">
                    {
                        criterios !== null ? 
                        criterios.map((criterio, index) => {
                            return (
                                <FormItem key={index} label={`${(index+1)}.- ${criterio.descripcion}`} style={{width: '100%'}}>
                                    {getFieldDecorator(`${criterio.id}`, {
                                    })(<Select placeholder="" >
                                        {Array(criterio.valor_max).fill(1).map((e, i) => {
                                                return <Option key={i} value={`${(i+1)}`}>{(i+1)}</Option>
                                        })}
                                    </Select>)}
                                </FormItem>
                            )
                        })
                        : null
                    }
                </Form>

            </Modal>
        );
    })
)

export default class FormEvaluacion extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
            criterios: props.criterios_evaluacion
        }
    }
    componentWillReceiveProps(nextProps) {
        const {visible, criterios_evaluacion} = nextProps;
        this.setState({
            visible: visible,
            criterios: criterios_evaluacion
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = () => {
        this.setState({ visible: false });
        this.form.resetFields();
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            
            // crear post al servidor
            // axios.post('/api/docente', {
            //     titulo: values.titulo,
            //     nombre: values.nombre,
            //     ap_paterno: values.ap_paterno,
            //     ap_materno: values.ap_materno,
            //     id_departamento: this.state.departamento.id_departamento,
            //     correo: values.correo
            // }).then((res) => {
            //     console.log(res)
            //     if(res.status === 200){
            //         message.success("Docente agregado satisfactoriamente")
            //         this.setState({ visible: false });
            //         form.resetFields();
            //     }else{
            //         Modal.error({
            //             title: 'Error al guardar el docente. Revisar los siguientes campos',
            //             content:(
            //                 <div>
            //                     {res.data.errores}
            //                 </div>
            //             ), onOk(){}, 
            //         })
            //     }
            // }).catch((err) => {
            //     message.error(err);                                    
            // })
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render(){
        return(
            <div>

                <CreateFormEvaluacion
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    criterios={this.state.criterios}
                />
            </div>
        )
    }
}
