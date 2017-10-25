import React, {Component} from 'react';
import {render} from 'react-dom';
import { Button, Modal, Form, Input,Icon, message, Upload} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

import axios from 'axios';
import moment from 'moment';

class FormCronograma extends Component{
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
    render(){
        const {getFieldDecorator} = this.props.form;
        const {proyecto} = this.props
        // console.log('aui', this.props)
        return (
            <Form onSubmit={this.handleSubmit} >
                <div className="dropbox">
                    <FormItem label="Seleccione su cronograma de actividades">
                        {getFieldDecorator('file_cronograma', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            initialValue: proyecto.filename_cronograma? [{uid: 1, name: 'cronograma.pdf', status: 'done', url: `/api/cronograma/pdf/${proyecto.filename_cronograma}`}]: []
                        })(
                            <Upload.Dragger
                                name="fileCronograma"
                                action={`/api/alumno/cronograma/${proyecto.id}`}
                                beforeUpload={this.beforeUpload}
                            >
                                <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Da click para seleccionar o arrastra tu archivo .pdf</p>
                                <p className="ant-upload-hint">Tu archivo debe pesar menos de 10 MB.</p>
                            </Upload.Dragger>
                        )}
                    </FormItem>
                </div>
            </Form>
        )
    }
}

const WrappedFormCronograma = Form.create({
    mapPropsToFields(props) {
      return {
        props
      }
    }
  })(FormCronograma);
export default WrappedFormCronograma;