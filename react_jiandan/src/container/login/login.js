import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar } from 'antd-mobile'
import Form from '../../component/form/form'

import './login.css'
import '../baseStyle/base.css'
@Form
class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }
    handleLogin(){
        console.log('登录中');
        
    }
    register(){
        this.props.history.push('/register')
    }

    render() {
        return (<div>
            <NavBar  mode='dard'>
                登录页
            </NavBar>
            <WhiteSpace />
            <WingBlank>
                <List>
                    <InputItem
                        onChange={v => { this.props.handleChange('user', v) }}
                    > 用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        onChange={v => { this.props.handleChange('pwd', v) }}
                        type="password"
                    > 密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary"
                    onClick={this.handleLogin}
                >登录</Button>
                <WhiteSpace />
                <Button type="primary" onClick={this.register}>注册</Button>
            </WingBlank>

        </div>)
    }
}
export default Login