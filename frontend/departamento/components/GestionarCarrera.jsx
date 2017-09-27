import React, {Component} from 'react';

import { Select, Row, Col, Form, Input, Button, Icon, Table} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

const CreateFormAsignacion = Form.create()(
    (props) => {
        const {form, handleSubmit, docentes} = props;
        const {getFieldDecorator} = form;
        return (
            <Form layout="horizontal" 
                onSubmit={handleSubmit}
            >   
                <FormItem hasFeedback label="Presidente de la academia">
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
                <FormItem hasFeedback label="Jefe de proyecto">
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
        const docentes = props.docentes.map((docente, index) => {
            return {
                id: docente.id,
                key: index,
                nombre: `${docente.titulo} ${docente.nombre} ${docente.ap_paterno} ${docente.ap_materno}`,
                id_usuario: docente.id_usuario,
                acciones: 'assign'
            }
        });
        this.state = {
            carrera: props.carrera,
            docentes: docentes,
            filterDocentes: docentes,
            filterDropdownVisible: false,
            searchText: '',
            filtered: false,
        }
    }
    componentWillReceiveProps(nextProps) {
        const docentes = props.docentes.map((docente, index) => {
            return {
                id: docente.id,
                key: index,
                nombre: `${docente.titulo} ${docente.nombre} ${docente.ap_paterno} ${docente.ap_materno}`,
                id_usuario: docente.id_usuario,
                asignacion: 'assign'
            }
        });
        this.setState({
            carrera: nextProps.carrera,
            docentes: docentes,
            filterDocentes: docentes,
            filterDropdownVisible: false,
            searchText: '',
            filtered: false,
        })
    }
    // FORM ASIGNAR PRESIDENTE Y JEFE DE PROYECTO
    refForm= (form) => {
        this.form = form;
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const form = this.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }    
          console.log('Received values of form: ', values);
        //   form.resetFields();
        });
    }
    // TABLE
    onInputChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    onSearch = () => {
        const {searchText, docentes} = this.state
        const reg = new RegExp(searchText, 'gi');
        this.setState({
            visible: false,
            filterDropdownVisible: false,
            filtered: !!searchText,
            filterDocentes: docentes.map((record) => {
                console.warn(record)
                 const match = record.nombre.match(reg);
                 if(!match){
                     return null;
                 }
                 return {
                     ...record,
                     nombre: (
                         <span>
                             {record.nombre.split(reg).map((text, i) => (
                                 i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
                             ))}
                         </span>
                     )
                 }
            }).filter(record => !!record),   
        })
    }
    render(){
        const {carrera, docentes, filterDocentes } = this.state;
        console.log(filterDocentes);
        const columns = [
            {
                title: 'Nombre',
                dataIndex: 'nombre',
                key: 'nombre',
                filterDropdown: (
                    <div className="custom-filter-dropdown">
                        <Input 
                            ref={ele => this.searchInput = ele}
                            placeholder="Buscar por nombre"
                            value={this.state.searchText}
                            onChange={this.onInputChange}
                            onPressEnter={this.onSearch}
                        />
                        <Button type="primary" onClick={this.onSearch}>Buscar</Button>
                    </div>
                ),
                filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
                filterDropdownVisible: this.state.filterDropdownVisible,
                onFilterDropdownVisibleChange: (visible) => {
                    this.setState({
                        filterDropdownVisible: visible,
                        visible: false
                    }, () => this.searchInput.focus())
                }               
            }
        ]
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };


        return (
            <div>
                <Row style={{marginTop: 20}}>
                    <Col xs={24} lg={16}>
                        <CreateFormAsignacion
                            ref={this.refForm}
                            handleSubmit={this.handleSubmit}
                            docentes={docentes}
                        />
                    </Col>
                </Row>

                <Row type="flex" justify="center" align="middle" style={{marginTop: 20}}>
                    <Table rowSelection={rowSelection} dataSource={filterDocentes} className="full-width" columns={columns} pagination={{ pageSize: 8 }}  scroll={{ x: 800 }} />
                </Row>
            </div>
        )
    }
}