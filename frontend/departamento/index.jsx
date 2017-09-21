// Dependencies
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col, Card, Layout, Button, Table, Modal} from 'antd';
const {Content, Header} = Layout;
const { Column, ColumnGroup } = Table;
import axios from 'axios';


// Components
import FormDepartamento from './components/FormDepartamento.jsx';
import FormEditDepartamento from './components/FormEditDepartamento.jsx';

class Departamento extends Component{
   constructor(){
       super();
       this.state = {
            data: [],
            visible_form_departamento: false,
            visible_form_edit_departamento: false,
            departamento: null
       }
       
   }
   fetchDepartamento(){
        axios.get('/api/departamento')
            .then(res => {
                if(res.status === 200){
                    var departamentos = res.data.map((departamento, index) => {
                        // falta el request del jefe de departamento jejeje
                        return {key: index, id: departamento.id, nombre:departamento.nombre, jefe_departamento: 'no asignado', acciones: 'Editar departamento' }
                    })
                    this.setState({
                        data: departamentos
                    })
                }
                // console.log(res.data);
            });
   }
   handleAddDepartamento(){
       this.fetchDepartamento();
       this.setState({
        visible_form_departamento: false,
        visible_form_edit_departamento: false
   })
   }
   componentDidMount() {
       this.fetchDepartamento();
   }
   showModalFormDepartamento = () => {
       this.setState({
            visible_form_departamento: true,
            visible_form_edit_departamento: false
       })
   }
   showModalFormEditDepartamento = (id_departamento) => {
    axios.get(`/api/departamento/${id_departamento}`)
        .then(res => {
            // console.log(res.data)
            this.setState({
                visible_form_departamento: false,
                visible_form_edit_departamento: true,
                departamento: res.data
            })
        })
}
    render(){
        const { visible_form_edit_departamento,visible_form_departamento, data, departamento} = this.state;
        return(
            <div>
                <Row type="flex" justify="left" align="middle">
                    <Col style={{marginRight: 20}}>
                        <h1> Departamento </h1>
                    </Col>
                    <Col>
                        <Button type="primary" icon="plus" onClick={this.showModalFormDepartamento}>Agregar</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" style={{marginTop: 30}}>
                    <Table dataSource={data} className="full-width" pagination={{ pageSize: 5 }} >
                        <Column 
                            title="ID"
                            dataIndex="id"
                            key="id"
                            className="center-text"
                        />
                        <Column 
                            title="Nombre"
                            dataIndex="nombre"
                            key="nombre"
                            className="center-text"
                        />
                        <Column 
                            title="Jefe de departamento"
                            dataIndex="jefe_departamento"
                            key="jefe_departamento"
                            className="center-text"
                        />
                        <Column 
                            title="Acciones"
                            key="acciones"
                            render={(text, record) => (
                                <span>
                                    {/* {record.id} */}
                                    <Button icon="edit" onClick={() => this.showModalFormEditDepartamento(record.id)}> {record.acciones} </Button>
                                </span>
                            )}
                            className="center-text"
                        />
                    </Table>
                </Row>
                <FormDepartamento visible={visible_form_departamento} onAddDepartamento={this.handleAddDepartamento.bind(this)}/>
                <FormEditDepartamento visible={visible_form_edit_departamento} departamento={departamento}/>              
            </div>
            
        )
    }
}

export default Departamento;