import React, {Component} from 'react';
import {Form, Input, Select, Row, Col, DatePicker, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;


const CreateFormAperturaPeriodoDeResidencia = Form.create()(
    (props => {
        const { onCreate, form, departamento} = props;
        const { getFieldDecorator} = form;
        var yearIterator = 2016;
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Seleccione la fecha de inicio y fin del periodo' }],
        };    
        return (
            <div>
                <Form layout="vertical" onSubmit={onCreate}>
                    <Row>
                        <Col xs={24} lg={8}>
                            <FormItem label="Carrera" hasFeedback>
                                {getFieldDecorator('id_carrera', {
                                    rules: [{required: true, message: 'Debe indicar la carrera'}]
                                })(
                                    <Select placeholder="Seleccione una carrera">
                                        {departamento.carreras.map((carrera, index) => {
                                            return (<Option key={index} value={carrera.nombre}>{carrera.nombre}</Option>)
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={18} lg={8}>
                            <FormItem label="Periodo de residencia" hasFeedback>
                                {getFieldDecorator('periodo', {
                                    rules: [{required: true, message: 'Debe indicar el periodo de la residencia'}]
                                })(
                                    <Select placeholder="Seleccione un periodo">
                                        <Option value="FEBRERO-JUNIO">FEBRERO-JUNIO</Option>
                                        <Option value="AGOSTO-DICIEMBRE">AGOSTO-DICIEMBRE</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col xs={6} lg={4}>
                            <FormItem label="Ciclo" hasFeedback>
                                {getFieldDecorator('ciclo', {
                                    rules: [{required: true, message: 'Debe indicar el ciclo de la residencia'}]
                                })(
                                    <Select placeholder="Seleccione un ciclo">
                                        {Array(50).fill(1).map((e, i) => {
                                            yearIterator++;
                                            return <Option key={i} value={`${yearIterator}`}>{yearIterator}</Option>
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} lg={8}>
                        <FormItem
                            label="Seleccione la fecha de inicio y fin del periodo"
                            style={{width: '100%'}}
                            >
                            {getFieldDecorator('fechas_periodo', rangeConfig)(
                                <RangePicker />
                            )}
                        </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} lg={8}>
                        <FormItem
                            label="Seleccione la fecha de inicio y fin de la entrega de anteproyectos"
                            >
                            {getFieldDecorator('fechas_entrega_anteproyecto', rangeConfig)(
                                <RangePicker />
                            )}
                        </FormItem>
                        </Col>
                    </Row>
                    <Button icon="save" type="primary" htmlType="submit" style={{marginTop: 20, marginBottom: 20}}>
                        Aperturar periodo
                    </Button>
                </Form>
            </div>
        )
    })
)
export default class FormAperturaPeriodoDeResidencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            departamento: props.departamento
        }
    }
    handleCreate = (e) => {
        e.preventDefault();
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            
            // crear post al servidor
            // axios.post('/api/departamento', {
            //     nombre: values.nombre_departamento,
            // }).then((res) => {
            //     console.log(res)
            //     if(res.status === 200){
            //         form.resetFields();
            //         message.success("Departamento agregado satisfactoriamente")
            //         this.setState({ visible: false });
            //         this.props.onAddDepartamento()
            //     }else{
            //         Modal.error({
            //             title: 'Error al guardar el departamento. Revisar los siguientes campos',
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
        const {departamento} = this.state
        return (
            <div>
                <CreateFormAperturaPeriodoDeResidencia
                    ref={this.saveFormRef}
                    onCreate={this.handleCreate}
                    departamento={departamento}
                />
            </div>
        )
    }
}