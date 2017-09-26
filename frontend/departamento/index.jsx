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
import FormAddDocente from '../docente/components/FormAddDocente.jsx'

class Departamento extends Component{
   constructor(){
       super();
       this.state = {
            data: [],
            visible_form_departamento: false,
            visible_form_edit_departamento: false,
            visible_add_docente: false,
            props_add_docente: {
                id_departamento: null,
                nombre_departamento: null
            },
            departamento: null,
            loadTable: true
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
                        data: departamentos,
                        loadTable: false
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
            visible_form_edit_departamento: false,
            visible_add_docente: false
       })
   }
   showModalFormEditDepartamento = (id_departamento) => {
        axios.get(`/api/departamento/${id_departamento}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    visible_add_docente: false,
                    visible_form_departamento: false,
                    visible_form_edit_departamento: true,
                    departamento: res.data
                })
            })
    }
    showAddDocente = (id_departamento, nombre_departamento) => {
        this.setState({
            visible_form_departamento: false,
            visible_form_edit_departamento: false,
            visible_add_docente: true,
            props_add_docente: {
                id_departamento: id_departamento,
                nombre_departamento: nombre_departamento
            }
        })
    }
    render(){
        const { visible_form_edit_departamento,visible_form_departamento, data, departamento, loadTable, visible_add_docente, props_add_docente} = this.state;
        return(
            <div>
                <Row type="flex" justify="left" align="middle">
                    <Col style={{marginRight: 20}}>
                        <h1> Departamentos </h1>
                    </Col>
                    <Col>
                        <Button type="primary" icon="plus" onClick={this.showModalFormDepartamento}>Agregar</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" style={{marginTop: 30}}>
                    <Table dataSource={data} className="full-width" pagination={{ pageSize: 5 }} loading={loadTable} scroll={{ x: 800 }} >
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
                                    <Button style={{marginRight: 5}} icon="edit" onClick={() => this.showModalFormEditDepartamento(record.id)}>Departamento</Button>
                                    <Button style={{marginLeft: 5}} icon="team" onClick={() => this.showAddDocente(record.id, record.nombre)} >Agregar docente</Button>
                                </span>
                            )}
                            className="center-text"
                        />
                    </Table>
                </Row>
                <FormDepartamento visible={visible_form_departamento} onAddDepartamento={this.handleAddDepartamento.bind(this)}/>
                <FormEditDepartamento visible={visible_form_edit_departamento} departamento={departamento}/>
                <FormAddDocente visible={visible_add_docente} departamento={props_add_docente}/>              
            </div>
            
        )
    }
}

export default Departamento;