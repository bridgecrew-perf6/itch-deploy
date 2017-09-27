import React, {Component} from 'react';

import { Select, Row, Col, Form, Input, Button} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

const CreateFormPresidenteAcademia = Form.create()(
    (props) => {
        const {form, handleSubmit, docentes} = props;
        const {getFieldDecorator} = form;
        return (
            <Form layout="horizontal" 
                onSubmit={handleSubmit}
            >   
                <FormItem hasFeedback label="Seleccione al presidente de la academia">
                    {getFieldDecorator('id_presidente_academia', {
                    rules: [{ required: true, message: 'Seleccione al presidente de academia' }],
                    })(
                        <Select 
                            showSearch
                            placeholder="Seleccione al presidente de la academia"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {docentes.map((docente, index) => {return <Option key={index} value={docente.nombre}>{docente.nombre}</Option>})}
                        </Select>
                    )}
                </FormItem>
                <FormItem hasFeedback label="Seleccione al jefe de proyecto">
                    {getFieldDecorator('id_jefe_proyecto', {
                    })(
                        <Select 
                            showSearch
                            placeholder="Seleccione al jefe de proyecto"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {docentes.map((docente, index) => {return <Option key={index} value={docente.nombre}>{docente.nombre}</Option>})}
                        </Select>
                    )}
                </FormItem>
                <Button type="primary" htmlType="submit">
                    Guardar
                </Button>
            </Form>
        )
    }
)

export default class Departamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            carrera: props.carrera,
            docentes: props.docentes
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            carrera: nextProps.carrera,
            docentes: nextProps.docentes
        })
    }
    refFormPresidenteAcademia= (form) => {
        this.formPresidenteAcademia = form;
    }
    handleSubmitPresidenteAcademia = (e) =>{
        e.preventDefault();
        const form = this.formPresidenteAcademia;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }    
          console.log('Received values of form: ', values);
        //   form.resetFields();
        });
    }
    render(){
        const {carrera, docentes} = this.state;
        return (
            <div>
                <Row style={{marginTop: 10}}>
                    <Col xs={24} lg={16}>
                        <CreateFormPresidenteAcademia
                            ref={this.refFormPresidenteAcademia}
                            handleSubmit={this.handleSubmitPresidenteAcademia}
                            docentes={docentes}
                        />
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    
                </Row>
            </div>
        )
    }
}