import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb, Icon, Avatar, Modal, Input, Form} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

import {getIsAuth} from '../api.jsx';

// components
import Docente from '../docente/index.jsx';
import Empresa from '../empresa/index.jsx';
import Departamento from '../departamento/departamento.jsx';
import CambiarContrasenia from '../layoutComponents/CambiarContrasenia.jsx';
import FormAddDocente from '../docente/components/FormAddDocente.jsx';

class LayoutJefeDepartamento extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: false,
            isAuth: true,
            usuario: null,
            departamento: null,
            componentRender: {
                       title: null,
                       render: null
            },
            visibleCambiarContrasenia: false,
            visible_add_docente: false,
            props_add_docente: {
                id_departamento: null,
                nombre_departamento: null
            }
        }
    }
    getIsAuth(){
        getIsAuth().then((usuario) => {
            if(usuario.rol === 'jefe_departamento'){
                axios.get(`/api/departamento/${usuario.id_departamento}`)
                    .then(res => {
                        if(res.status === 200){
                            this.setState({
                                departamento: res.data,
                                isAuth: usuario.isAuth,
                                usuario: usuario,
                                componentRender: {
                                    title: 'Gestión de departamento '+res.data.nombre,
                                    render: <Departamento departamento={res.data}/>

                                }
                            })
                        }else{
                            this.setState({isAuth: false})
                        }
                    })
            }
            else{
                this.setState({isAuth: false})
            }
        })
    }
    componentWillMount(){
        this.getIsAuth()
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            visibleCambiarContrasenia: false
        });
    }
    
    handleMenu = ({item, key, selectedKeys}) => {
        if(key == 1){
            const {departamento} = this.state
            this.setState({
                componentSelected: key,
                visibleCambiarContrasenia: false,
                visible_add_docente: false,
                componentRender: {
                    title: 'Gestión de deparamento ' + departamento.nombre,
                    render: <Departamento departamento={departamento} />
                }
            })
        }else if( key == 2){
            this.setState({
                componentSelected: key,
                visibleCambiarContrasenia: false,
                visible_add_docente: false,
                componentRender: {
                    title: 'Gestión de empresas',
                    render: <Empresa />
                }
            })
        }else if(key == 3){
            this.setState({
                visibleCambiarContrasenia: true,
                visible_add_docente: false
            })
        }else if(key == 4){
            const {departamento} = this.state;
            this.setState({
                visibleCambiarContrasenia: false,
                visible_add_docente: true,
                props_add_docente: {
                    id_departamento: departamento.id,
                    nombre_departamento: departamento.nombre
                }
            })
        }
    }
    render(){
        const {isAuth, componentSelected, componentRender, visibleCambiarContrasenia, usuario, departamento, visible_add_docente, props_add_docente} = this.state
        // console.log(isAuth)
        return(
            isAuth ? (
                <Layout style={{minHeight:'100vh'}}>
                    <Sider
                        breakpoint="lg"
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        
                    >
                        <div className="logo" style={{textAlign: 'center'}}>
                            <img src="/img/tec_logo.png" alt="logo_tec" height="100%"/>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.handleMenu}>
                            <SubMenu
                                key="sub0"
                                title={<span><Icon type="appstore" /><span>Departamento</span></span>}
                                >
                                <Menu.Item key="1" >
                                    <Icon type="team"/>
                                    <span>Gestionar</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="user-add"/>
                                    <span>Agregar docente</span>
                                    <FormAddDocente visible={visible_add_docente} departamento={props_add_docente}/>              
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="2" >
                                <Icon type="contacts"/>
                                <span>Empresas</span>
                            </Menu.Item>
                            <Menu.Divider/>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>Usuario</span></span>}
                                >
                                <Menu.Item key="3">Cambiar contraseña</Menu.Item>
                                <Menu.Item ><a href="/api/usuario/logout"> <strong>Cerrar sesión</strong> </a> </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            {componentRender.title}
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
                            {componentRender.render}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Sistema de Seguimiento de residencias del ITCH ©2017 Francisco Blanco 00fblanco@gmail.com
                        </Footer>
                    </Layout>
                    <CambiarContrasenia visible={visibleCambiarContrasenia}/>
                </Layout>
            ):
            (<Redirect to="/usuario/auth"/>)
        )
    }
}

export default LayoutJefeDepartamento;