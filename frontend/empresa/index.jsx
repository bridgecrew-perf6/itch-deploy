// Dependencies
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col, Card, Layout, Button, Table, Modal, Input, Icon} from 'antd';
const {Content, Header} = Layout;
const { Column, ColumnGroup } = Table;
import axios from 'axios';


// Components
import FormEmpresa from './components/FormEmpresa.jsx';

class Empresa extends Component{
   constructor(){
       super();
       this.state = {
            empresas: [],
            filterEmpresas: [],
            visible: false,
            filterDropdownVisible: false,
            searchText: '',
            filtered: false,
            loadTable: true
       }
       
   }
   onInputChange = (e) => {
       this.setState({
           searchText: e.target.value
       })
   }
   onSearch = () => {
       const {searchText, empresas} = this.state
       const reg = new RegExp(searchText, 'gi');
       this.setState({
           visible: false,
           filterDropdownVisible: false,
           filtered: !!searchText,
           filterEmpresas: empresas.map((record) => {
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
   fetchEmpresas(){
        axios.get('/api/empresa')
            .then(res => {
                if(res.status === 200){
                    var empresas = res.data.empresas.map((empresa, index) => {
                        return {
                            key: index,
                            id: empresa.id, 
                            nombre: empresa.nombre, 
                            clasificacion: empresa.clasificacion,
                            detalles: {
                                nombre: empresa.nombre_titular
                            }
                            
                        }
                    })
                    this.setState({
                        loadTable: false,
                        empresas,
                        filterEmpresas: empresas
                    })
                }
                // console.log(res.data);
            }).catch(err => {
                this.setState({
                        loadTable: false
                })
            })
   }
   componentDidMount() {
        this.fetchEmpresas();
    
   }
   showModal = () => {
       this.setState({
           visible: true
       })
   }
   handleAddDepartamento(){
       this.fetchEmpresas();
       this.setState({
           visible: false
       })
   }
    render(){
        const { visible, filterEmpresas, loadTable } = this.state;
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
            },
            {
                title: 'Clasificación',
                dataIndex: 'clasificacion',
                key: 'clasificacion',
                filters: [
                    {
                        text: 'Público',
                        value: 'público'
                    },
                    {
                        text: 'Privado',
                        value: 'privado'
                    },
                    {
                        text: 'Industrial',
                        value: 'industrial'
                    },
                    {
                        text: 'Servicios',
                        value: 'servicios'
                    }
                ], filterMultiple: false,
                onFilter: (value, record) => record.clasificacion.indexOf(value) === 0,

            }
        ]
        return(
            
            <div>
                <Row type="flex" justify="left" align="middle">
                    <Col style={{marginRight: 20}}>
                        <h1> Empresas </h1>
                    </Col>
                    <Col>
                        <Button type="primary" icon="plus" onClick={this.showModal}>Agregar</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" style={{marginTop: 30}}>
                    <Table dataSource={filterEmpresas} className="full-width" columns={columns} pagination={{ pageSize: 5 }} loading={loadTable} scroll={{ x: 800 }} expandedRowRender={record => <p>{record.detalles.nombre}</p>} />
                </Row>
                <FormEmpresa visible={visible} onAddEmpresa={this.handleAddDepartamento.bind(this)}/>
                                
            </div>
            
        )
    }
}

export default Empresa;