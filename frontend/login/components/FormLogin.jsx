// Dependencies
import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
// api
import request from 'superagent';

class FormLogin extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              request
                .post('/users')
                .send({values})
                .end((err, res)=>{
                    alert(err + res.statusCode);
                    console.log("culooo", res);
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
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Debe de ingresar su nombre de usuario.'}]
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Favor de ingresar su contraseña' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem> 
                <Button type="primary" htmlType="submit" style={{maxWidth:100}}>
                    Ingresar
                </Button>
            </Form>
        )
    }
}

const WrappedLoginForm = Form.create()(FormLogin);
export default WrappedLoginForm;