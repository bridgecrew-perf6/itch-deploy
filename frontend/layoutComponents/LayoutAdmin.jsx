import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import request from 'superagent';

class LayoutAdmin extends Component{
    state = {
        collapsed: false
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    componentDidMount() {
        request('/api/usuario/isAuth')
            .end((err, res)=>{
                alert(res.body.auth);
                console.warn('api', res)
            })
    }
    render(){
        const {children} = this.props
        return(
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
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
                        
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Sistema de Seguimiento de residencias del ITCH ©2017 Creado por Francisco Blanco 00fblanco@gmail.com
                    </Footer>
                </Layout>
                
            </Layout>
        );
    }
}

export default LayoutAdmin;