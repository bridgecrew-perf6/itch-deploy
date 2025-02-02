import React, {Component} from 'react';
import {TreeSelect, Form, Tooltip, Select, Row, Col, Icon, Input, Upload, message, Button, Modal, Badge, Collapse, Alert} from 'antd';
const TreeNode = TreeSelect.TreeNode;
const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;


import axios from 'axios';
import moment from 'moment';

const CreateRegistrarProyecto = Form.create()(
    (props => {
        const {handleSubmit, form, anteproyecto, empresas, normFile, beforeUpload} = props;
        const { getFieldDecorator} = form;
        // console.log(empresas)
        return (
            <Form
                layout="vertical"
                onSubmit={handleSubmit}
            >  
                <FormItem 
                    label={(
                        <span>
                            Nombre del anteproyecto&nbsp;
                            <Tooltip title="El nombre del anteproyecto debe tener un formato conciso.">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                
                    hasFeedback
                >
                    {getFieldDecorator('nombre', {
                        rules: [{required: true, message: 'El anteproyecto debe tener un nombre'}],
                        initialValue: anteproyecto.nombre ? anteproyecto.nombre : ''
                    })(
                        <Input placeholder="Ingrese el nombre del anteproyecto" type="text"/>
                    )}
                </FormItem>
                <FormItem 
                    label="Objetivo general del anteproyecto"
                    hasFeedback
                >
                    {getFieldDecorator('objetivo_general', {
                        rules: [{required: true, message: 'El anteproyecto debe tener un objetivo general.'}],
                        initialValue: anteproyecto.objetivo_general ? anteproyecto.objetivo_general : ''
                    })(
                        <Input.TextArea placeholder="Escriba aqui el objetivo general" type="text" autosize={{ minRows: 2, maxRows: 6 }}/>
                    )}
                </FormItem>
                <FormItem 
                    label="Origen del proyecto"
                    hasFeedback
                >
                    {getFieldDecorator('origen', {
                        rules: [{required: true, message: 'Debe indicar el origen del anteproyecto.'}],
                        initialValue: anteproyecto.origen ? anteproyecto.origen : ''
                    })(
                        <Select placeholder="Seleccione el origen de su proyecto">
                            <Option value="Banco de proyectos">Banco de proyectos</Option>
                            <Option value="Propuesta propia">Propuesta propia</Option>
                            <Option value="Trabajador">Trabajador</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem 
                    label={(
                        <span>
                            Asesor externo&nbsp;
                            <Tooltip title="Si su asesor o empresa no esta en el catalogo,solicitar al jefe de su departamento.">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                    hasFeedback
                >
                    
                    {getFieldDecorator('id_asesor_externo', {
                        rules: [{required: true, message: 'El anteproyecto debe tener un asesor externo'}],
                        initialValue: anteproyecto.id_asesor_externo ? `${anteproyecto.id_asesor_externo}` : ''
                    })(
                        <TreeSelect
                            showSearch
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            placeholder="Busque por nombre de empresa o el nombre de su asesor externo."
                            allowClear
                            treeDefaultExpandAll
                            filterTreeNode={(input, treeNode) => {
                                {/* console.log(input)
                                console.log(treeNode.props.title) */}
                                return (treeNode.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                            }}
                        >
                            { empresas ? empresas.map((empresa, i) => {
                                    return (
                                        <TreeNode title={empresa.nombre} key={`${i}`} value={null} disabled={true} >
                                            {empresa.asesor_externos.map((asesor_externo, j) => {
                                                {/* console.log(asesor_externo.nombre) */}
                                                return (
                                                    <TreeNode value={`${asesor_externo.id}`} title={asesor_externo.nombre} key={`${j}_${i}`}/>
                                                )
                                            })}
                                        </TreeNode>
                                    )
                                }) : null 
                            }
                        </TreeSelect>
                    )}
                </FormItem>
                <FormItem
                    label="Seleccione su anteproyecto"
                >
                    <div className="dropbox">
                        {getFieldDecorator('file_anteproyecto', {
                            valuePropName: 'fileList',
                            getValueFromEvent: normFile,
                        })(
                            <Upload.Dragger 
                                name="fileAnteproyecto" 
                                action={`/api/alumno/file_anteproyecto/${anteproyecto.id}`}
                                beforeUpload={beforeUpload}
                            >
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Da click para seleccionar o arrastra tu archivo .pdf</p>
                            <p className="ant-upload-hint">Tu archivo debe pesar menos de 10 MB.</p>
                        </Upload.Dragger>
                        )}
                    </div>
                </FormItem>
                <Button size="large" icon="save" type="primary" htmlType="submit" style={{marginTop: 40, marginBottom: 20}}>
                    Guardar cambios
                </Button>
                <Row>
                    <Col lg={24} xs={24}>
                    {
                        (anteproyecto.nombre != null & anteproyecto.origen != null & anteproyecto.id_asesor_externo != null)
                            ?   <Button icon="file-pdf"><a href={`/api/alumno/${anteproyecto.id_alumno}/solicitud_residencia`} target="_blank">Generar solicitud de residencia</a></Button>
                            : <Alert type="info" message="Faltan algunos datos para poder generar su solicitud de residencia" showIcon/>

                    }
                    </Col>
                </Row>

            </Form>
        )
    })
)

export default class RegistrarAnteproyecto extends Component{
    constructor(props){
        super(props);
        this.state = {
            anteproyecto: props.anteproyecto,
            empresas: null
        }
    }
    componentDidMount() {
        axios.get('/api/empresa')
            .then(res =>{
                // console.log('res', res.data)
                if(res.status == 200){
                    this.setState({
                        empresas: res.data.empresas
                    })
                }
            })
    }
    // FUNCTIONS UPLOAD FILE
    normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    }
    beforeUpload(file) {
        const isPDF = file.type === 'application/pdf';
        if (!isPDF) {
            message.error('El archivo debe ser PDF!');
        }
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
            message.error('El archivo debe tener un tamaño menor de 10 MB.');
        }
        return isPDF && isLt10M;
    }

    // END FUNCTIONS UPLOAD FILE
    saveFormRef = (form) => {
        this.form = form;
    }
    handleSubmit= (e) => {
        e.preventDefault();
        const form = this.form;
        const {anteproyecto} = this.state;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            // console.log('Received values of form: ', values);
            const id_asesor_externo = values.id_asesor_externo,
                nombre = values.nombre,
                origen = values.origen,
                objetivo_general = values.objetivo_general;
            // crear post al servidor
            axios.put(`/api/alumno/${anteproyecto.id}/anteproyecto`, {
                id_asesor_externo,
                nombre,
                objetivo_general,
                origen
            }).then((res) => {
                // console.log(res)
                if(res.status === 200){
                    // form.resetFields();
                    message.success("Anteproyecto actualizado satisfactoriamente!")
                }else{
                    Modal.error({
                        title: 'Error no se pudieron guardar los cambios. Revisar los siguientes campos',
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
    

    render(){
        const {anteproyecto, empresas} = this.state
        const customPanelStyle = {
            background: '#f4f8f9',
            borderRadius: 10,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
          };
        // console.warn(')>', anteproyecto.periodo)
        const fecha_inicio_entrega = anteproyecto.periodo.fecha_inicio_entrega_anteproyecto,
            fecha_fin_entrega = anteproyecto.periodo.fecha_fin_entrega_anteproyecto;
        const currentDate = moment().format('YYYY-MM-DD');

        // console.warn(anteproyecto);
        return(
            <div>
                <Row type="flex" justify="center">
                    <Col xs={24} lg={20} style={{marginBottom: 25}}>
                        {(anteproyecto.dictamen === 'aprobado') ? <Badge status="success" text="Dictamen: aprobado" /> : <Badge status="error" text="Dictamen: no aprobado" /> }
                    </Col>
                    <Col xs={24} lg={20} style={{marginBottom: 25}}>
                        <h3>Revisores</h3>
                        <Collapse bordered={false} >
                            {anteproyecto.revisiones.map((revision, index) => {
                                return (<Panel header={revision.docente.nombre} key={index} style={customPanelStyle}>
                                            {(revision.esFactible === 'factible')? <Badge status="success" text="Proyecto factible" /> : ''}
                                            {(revision.esFactible === 'no_factible')? <Badge status="error" text="Proyecto no factible" /> : ''}
                                            {(revision.esFactible === 'corrección')? <div>
                                                        <Badge  status="processing" text="Corregir los siguientes puntos y volver a subir anteproyecto" /> 
                                                            <p style={{marginLeft: 20, marginTop: 10}}>{revision.comentario }</p>
                                                        </div>: ''}
                                        </Panel>)
                            })}
                        </Collapse>
                    </Col>
                    <Col xs={24} lg={20}>
                        <CreateRegistrarProyecto 
                            anteproyecto={anteproyecto}
                            handleSubmit={this.handleSubmit}
                            ref={this.saveFormRef}
                            empresas={empresas}
                            normFile={this.normFile}
                            beforeUpload={this.beforeUpload}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}