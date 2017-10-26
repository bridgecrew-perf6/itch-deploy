import React, {Component} from 'react';
import {Col, Row, Tabs, Icon, Alert} from 'antd'
const {TabPane} = Tabs;

import uuid from 'uuid';
import moment from 'moment';

// components
import WrappedFormSeguimiento from '../components/FormSeguimiento.jsx';

export default class SeguimientoProyecto extends Component{
    constructor(props){
        super(props);
        this.state = {
            seguimientos: props.seguimientos,
            renderSeguimiento: null
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            seguimientos: nextProps.seguimientos,
            renderSeguimiento: null
        })
    }
    onChangeSeguimiento = (id_seguimiento) => {
        const {seguimientos} = this.state
        const seguimiento = seguimientos.find(seg => seg[0].id==id_seguimiento)[0];
        const currentDate = moment().format('YYYY-MM-DD');
        if(currentDate >= seguimiento.seguimiento.fecha_inicial && currentDate <= seguimiento.seguimiento.fecha_final){
            this.setState({
                renderSeguimiento: <WrappedFormSeguimiento seguimiento={seguimiento}/>
            })
        }else{
            this.setState({
                renderSeguimiento: <Alert message={`No puede acceder al seguimiento,\n Fecha inicial: ${moment(seguimiento.seguimiento.fecha_inicial, 'YYYY-MM-DD').format('LL')} - Fecha final: ${moment(seguimiento.seguimiento.fecha_final, 'YYYY-MM-DD').format('LL')}`} type="warning" showIcon />
            })
        }
        
    }
    render(){
        const {seguimientos, renderSeguimiento} = this.state;
        console.log(seguimientos);
        return(
            <div>
                <Row>
                    <Col xs={24} lg={4}>
                        <Tabs defaultActiveKey="0" tabPosition="left" onChange={(key) => this.onChangeSeguimiento(key)}>
                            {seguimientos.map(((seguimiento, index) => {
                                console.log('key', seguimiento[0].id)
                                return (
                                    <TabPane  tab={<span><Icon type="schedule" />{`Seguimiento ${index+1}`}</span>} key={seguimiento[0].id}>
                                    </TabPane>
                                )
                            }))}
                        </Tabs>
                    </Col>
                    <Col xs={24} lg={20}>
                        {renderSeguimiento}
                    </Col>
                </Row>
            </div>
        )
    }
}