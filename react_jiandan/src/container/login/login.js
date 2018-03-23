import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar,Icon  } from 'antd-mobile'
import Form from '../../component/form/form'
import {connect} from 'react-redux'
import {login,msgClear} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

import './login.css'
import '../baseStyle/base.css'
@connect(
    state=>state.user,
    {login,msgClear}
)
@Form
class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.register = this.register.bind(this)
    }
    handleLogin(){
        this.props.login(this.props.state)
        
    }
    register(){      
        this.props.history.push('/register')
    }
    componentDidMount() {
        this.props.msgClear()
    }

    render() {
        return (<div>
            <NavBar  mode='dard' 
            icon={<Icon type="left" />}
            onLeftClick={() =>{this.props.history.goBack()}}
            >
                登录页
            </NavBar>
            {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
            {this.props.msg? <p className='error-msg'>{this.props.msg}</p>: null}
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