import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input, Radio,Select, Icon, message } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

import axios from 'axios';

const CreateFormAddAlumno = Form.create()(
    (props => {
        const { visible, onCancel, onCreate, form, carrera} = props;
        const { getFieldDecorator} = form;
        
        return(
            <Modal
                visible={visible}
                title={`Agregar alumno a la carrera de ${carrera ? carrera.nombre: ''}`}
                okText="Guardar"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Número de control">
                        {getFieldDecorator('no_control', {
                            rules: [{required: true, message: 'El número de control es obligatorio.'},{len: 8, message: 'El numero de control contiene 8 digitos'}]
                        })(<Input  style={{ width: '100%' }} placeholder="Ingrese el número de control del alumno"/>)}
                    </FormItem>
                    <FormItem label="Nombre">
                        {getFieldDecorator('nombre', {
                            rules: [{required: true, message: 'El alumno debe tener un nombre'}]
                        })(<Input placeholder="Ingrese el nombre(s) del alumno"/>)}
                    </FormItem>
                    <FormItem label="Apellido paterno">
                        {getFieldDecorator('ap_paterno', {
                            rules: [{required: true, message: 'El alumno debe tener un apellido paterno.'}]
                        })(<Input placeholder="Ingrese el apellido paterno del alumno"/>)}
                    </FormItem>
                    <FormItem label="Apellido materno">
                        {getFieldDecorator('ap_materno', {
                            rules: [{required: true, message: 'El alumno debe tener un apellido materno'}]
                        })(<Input placeholder="Ingrese el apellido materno del alumno"/>)}
                    </FormItem>
                    <FormItem label="Correo electronico">
                        {getFieldDecorator('correo', {
                            rules: [{type: 'email',message: 'El correo no es correcto'},{required: true, message: 'Necesita su correo para autentificarse en el sistema.'}]
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}} />} type="email" placeholder="Ingrese el correo electronico del alumno" />
                        )}
                    </FormItem>

                </Form>

            </Modal>
        );
    })
)

export default class FormAddAlumno extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
            carrera: props.carrera,
            id_periodo: props.id_periodo
        }
    }
    componentWillReceiveProps(nextProps) {
        const {visible, carrera} = nextProps;
        this.setState({
            visible: visible,
            carrera: carrera,
            id_periodo: nextProps.id_periodo
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
            console.log('Received values of form: ', values);
            
            // crear post al servidor
            axios.post('/api/alumno', {
                no_control: values.no_control,
                nombre: values.nombre,
                ap_paterno: values.ap_paterno,
                ap_materno: values.ap_materno,
                id_carrera: this.state.carrera.id,
                correo: values.correo,
                id_periodo: this.state.id_periodo
            }).then((res) => {
                console.log(res)
                if(res.status === 200){
                    message.success("Alumno agregado satisfactoriamente")
                    this.setState({ visible: false });
                    form.resetFields();
                }else{
                    Modal.error({
                        title: 'Error al guardar al alumno. Revisar los siguientes campos',
                        content:(
                            <div>
                                {res.data.errores}
                            </div>
                        ), onOk(){}, 
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

                <CreateFormAddAlumno
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    carrera={this.state.carrera}
                />
            </div>
        )
    }
}
