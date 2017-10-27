import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input,Icon, message, Upload, Collapse, Badge} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const {Panel} = Collapse;
import axios from 'axios';
import moment from 'moment';

class FormSeguimiento extends Component{
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios.put('/api/proyecto/seguimiento',{
                id_seguimiento: this.props.seguimiento.id,
                url_seguimiento: values.url_seguimiento
            }).then(res => {
                if(res.status === 200){
                    message.success('Seguimiento actualizado satisfactoriamente');
                }else{
                    message.error('Error al actualizar al seguimiento, favor de reportar al administrador.')
                }
            })
          }
        });
      }
    render(){
        const {getFieldDecorator} = this.props.form;
        const {seguimiento} = this.props
        const panelStyleSolucionado = {
            background: '#f4f8f9',
            borderRadius: 10,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
          };
        // console.log('aui', this.props)
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <div className="dropbox">
                        <FormItem label="URL del seguimiento en google drive">
                            {getFieldDecorator('url_seguimiento', {
                                rules: [{required: true, message: 'El url del archivo es necesario para la revisión.'}, {pattern: '^https:\/\/drive.google.com\/[^\\s]*$', message: 'La URL esta mal formada ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ'}]
                            })(
                                <Input prefix={<Icon type="global" style={{ fontSize: 13 }} />} addonAfter={seguimiento.url_seguimiento? <a href={seguimiento.url_seguimiento? seguimiento.url_seguimiento: '#'} target="_blank"><Icon type="cloud"/>Ver seguimiento</a>: null} placeholder="URL del sitio donde esta almacenado el archivo del seguimiento ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"/>
                            )
                            }
                        </FormItem>
                        <Button type="primary" htmlType="submit">
                            Actualizar
                        </Button>
                    </div>
                </Form>
                <h3 style={{marginTop: 20}}>Observaciones</h3>
                <div style={{overflowY: 'scroll', height: 300}}> 
                    <Collapse bordered={false}  >
                                {seguimiento.revisiones_seguimiento.map((revision, index) => {
                                    return (<Panel header={(<div>{revision.solucionado ? <Badge status="success" text={`Fecha: ${moment(revision.createdAt).utc().format('LL')} - Revisión por: ${revision.docente.titulo} ${revision.docente.nombre} ${revision.docente.ap_paterno} ${revision.docente.ap_materno}`} />: <Badge text={`Fecha: ${moment(revision.createdAt).utc().format('LL')} - Revisión por: ${revision.docente.titulo} ${revision.docente.nombre} ${revision.docente.ap_paterno} ${revision.docente.ap_materno}`} status="processing"/>}</div>)} key={index} style={panelStyleSolucionado}>
                                                <h3>Observación: </h3><p>{revision.observacion}</p>
                                            </Panel>)
                                })}
                    </Collapse>
                </div>
            </div>

        )
    }
}

const WrappedFormSeguimiento = Form.create({
    mapPropsToFields(props) {
      return {
        props
      }
    }
  })(FormSeguimiento);
export default WrappedFormSeguimiento;