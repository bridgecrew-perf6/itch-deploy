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
import CambiarContrasenia from '../layoutComponents/CambiarContrasenia.jsx';
import ProyectoDeResidencia from '../alumno/components/ProyectoDeResidencia.jsx';
import RegistrarAsesoria from '../alumno/components/RegistrarAsesoria.jsx'
import SeguimientoProyecto from '../alumno/components/SeguimientoProyecto.jsx';

export default class LayoutResidente extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: true,
            isAuth: true,
            usuario: null,
            componentRender: {
                       title: null,
                       render: null
            },
            visibleCambiarContrasenia: false,
            proyecto: null
        }
    }
    getIsAuth(){
        getIsAuth().then((usuario) => {
            if(usuario.rol === 'residente'){
                this.setState({
                    isAuth: usuario.isAuth,
                    usuario: usuario,
                    componentRender: {
                        
                    }
                })
                axios.get(`/api/alumno/${usuario.id_alumno}/proyecto`)
                    .then(res => {
                        // console.warn(res.data)
                        if(res.status === 200){
                            this.setState({
                                proyecto: res.data,
                                isAuth: usuario.isAuth,
                                usuario: usuario,
                                componentRender: {
                                    title: 'Proyecto de residencia',
                                    render: <ProyectoDeResidencia proyecto={res.data}/>
                                   
                                }
                            })
                        }else{
                            this.setState({isAuth: false})
                        }
                    })
            }else{
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
        const {usuario, proyecto} = this.state;
        if(key == 1){ // Registrar anteproyecto /
            axios.get(`/api/alumno/${usuario.id_alumno}/proyecto`)
                .then(res => {
                    // console.warn(res.data)
                    if(res.status === 200){
                        this.setState({
                            componentSelected: key,
                            visibleCambiarContrasenia: false,
                            componentRender: {
                                title: 'Proyecto de residencia',
                                render: <ProyectoDeResidencia proyecto={res.data}/>
                            }
                        })
                    }
                })
            
        }else if(key == 2){
            axios.get(`/api/alumno/${usuario.id_alumno}/proyecto`)
            .then(res => {
                // console.warn(res.data)
                if(res.status === 200){
                    this.setState({
                        componentSelected: key,
                        visibleCambiarContrasenia: false,
                        componentRender: {
                            title: 'Asesorias',
                            render: <RegistrarAsesoria usuario={usuario} proyecto={res.data}/>
                        }
                    })
                }
            })
        }else if(key == 4){
            axios.put(`/api/proyecto/seguimientos`, {
                id_proyecto: proyecto.id,
                id_periodo: proyecto.anteproyecto.id_periodo
            }).then( res => {
                    if(res.status === 200){
                        // console.warn('seguimientos', res.data);
                        this.setState({
                            componentSelected: key,
                            visibleCambiarContrasenia: false,
                            componentRender: {
                                title: 'Seguimientos',
                                render: <SeguimientoProyecto seguimientos={res.data}/>
                            }
                        })
                    }
                })
            
        }else if(key == 3){ // modal cambiar contraseña
            this.setState({
                visibleCambiarContrasenia: true,
            })
        }
    }
    render(){
        const {isAuth, componentSelected, componentRender,usuario, visibleCambiarContrasenia} = this.state
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
                            <Menu.Item key="1" >
                                <Icon type="inbox"/>
                                <span>Proyecto</span>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <Icon type="solution"/>
                                <span>Asesorias</span>
                            </Menu.Item>
                            <Menu.Item key="4" >
                                <Icon type="calendar"/>
                                <span>Seguimientos</span>
                            </Menu.Item>

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
