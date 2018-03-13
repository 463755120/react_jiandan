import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio, NavBar } from 'antd-mobile'
import Form from '../../component/form/form'
import './register.css'

@Form
class Register extends React.Component {
    render() {
        return (<div>
            <NavBar mode='dard'>
                注册页
            </NavBar>
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
                    <WhiteSpace />
                </List>
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </WingBlank>
        </div>)
    }
}
export default Register