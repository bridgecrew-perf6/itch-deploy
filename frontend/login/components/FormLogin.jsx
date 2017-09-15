// Dependencies
import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, message, Alert} from 'antd';
const FormItem = Form.Item;
// api
import request from 'superagent';

class FormLogin extends Component{
    constructor(){
        super();
        this.state = {
            getErrorMessage: <div></div>
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        const {correo, contrasenia} = values;
          if (!err) {
              request
                .post('/usuario/auth')
                .send({correo, contrasenia})
                .end((err, res)=>{
                    if(res.status === 401){
                        // error de autenticación
                        //message.error(res.body.message);
                        this.setState({
                            getErrorMessage: <Alert
                                                message="Error"
                                                description={res.body.message}
                                                type="error"
                                                showIcon
                                                closable
                                            />
                            
                        })
                    }
                    if (res.status === 200){
                        // autenticado redirigir
                        alert(res.body.message)
                    }
                });
            console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;        
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('correo', {
                        rules: [{type: 'email',message: 'El email no es correcto'},{required: true, message: 'Necesita su correo para autentificarse en el sistema.'}]
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}} />} type="email" placeholder="Ingrese su correo electronico" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('contrasenia', {
                        rules: [{ required: true, message: 'Necesita su contraseña para autentificarse en el sistema.' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem> 
                <Button icon="unlock" type="primary" htmlType="submit" style={{maxWidth:100, marginTop: 20, marginBottom: 20}}>
                    Ingresar
                </Button>
                {this.state.getErrorMessage}
            </Form>
        )
    }
}

const WrappedLoginForm = Form.create()(FormLogin);
export default WrappedLoginForm;