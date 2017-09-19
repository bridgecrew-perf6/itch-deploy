import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import {Redirect} from 'react-router-dom';

import {getIsAuth} from '../api.jsx';

// components
import Departamento from '../departamento/index.jsx';

class LayoutAdmin extends Component{
    
    constructor(){
        super();
        this.state = {
            collapsed: false,
            isAuth: true,
            componentSelected: 1,
            components: {
                        1: {
                            title: 'Gestión de departamentos',
                            render: <Departamento/>
                        },
                        2 :{
                            title: 'Gestión de empresas',
                            render: <h1>empresa</h1>
                        }
                    }
                        
        }
    }
    getIsAuth(){
        getIsAuth().then((usuario) => {
            this.setState({isAuth: usuario.isAuth})
        })
    }
    componentWillMount(){
        this.getIsAuth()
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleMenu = ({item, key, selectedKeys}) => {
        this.setState({
            componentSelected: key
        })
    }
    render(){
        const {isAuth, componentSelected, components} = this.state
        // console.log(isAuth)
        const component = components[componentSelected];
        return(
            isAuth ? (
                <Layout style={{minHeight:'100vh'}}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        breakpoint='md'
                    >
                        <div className="logo" style={{textAlign: 'center'}}>
                            <img src="/img/tec_logo.png" alt="logo_tec" height="100%"/>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.handleMenu}>
                            <Menu.Item key="1">
                                <Icon type="appstore-o"/>
                                <span>Departamentos</span>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <Icon type="contacts"/>
                                <span>Dependencias</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="user"/>
                                <span>Docentes</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            {component.title}
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {component.render}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Sistema de Seguimiento de residencias del ITCH ©2017 Francisco Blanco 00fblanco@gmail.com
                        </Footer>
                    </Layout>
                </Layout>
            ):
            (<Redirect to="/usuario/auth"/>)
        )
    }
}

export default LayoutAdmin;