import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio, NavBar,Icon } from 'antd-mobile'
import Form from '../../component/form/form'
import './register.css'
import {connect} from 'react-redux'
import {regisger} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
    state=>state.user,
    {regisger}
)
@Form
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister(){
        console.log(this.props)
        this.props.regisger(this.props.state)
    }
    render() {
        return (<div>
            <NavBar  mode='dard' 
            icon={<Icon type="left" />}
            onLeftClick={() =>{this.props.history.goBack()}}
            >
                注册页
            </NavBar>
            {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
            {this.props.msg? <p className='error-msg'>{this.props.msg}</p>: null}
            <WhiteSpace />
            <WingBlank>
                <List>
                    <InputItem
                        onChange={v => {
                            this.props.handleChange('user', v)
                        }}
                    > 用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v => {
                            this.props.handleChange('pwd', v)
                        }}
                    > 密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v => {
                            this.props.handleChange('repeatpwd', v)
                        }}
                    > 确认密码</InputItem>
                    <WhiteSpace />
                    <InputItem              
                    type="digit"
                    placeholder="请输入手机"
                    clear
                    onChange={v => {
                        this.props.handleChange('phone', v)
                    }}
                  >手机</InputItem>
                    <WhiteSpace />
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </WingBlank>
        </div>)
    }
}
export default Register