import React from 'react'
import { connect } from 'react-redux'
import { Result, List, Brief, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import ValToLa from '../../component/sValueToLabel/sValueToLabel'
import {logoutSubmit} from '../../redux/user.redux'

@connect(
    state => state.user,
    {logoutSubmit}
)
export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.logoutSubmit = this.logoutSubmit.bind(this)
    }
    logoutSubmit(){
        const alert = Modal.alert
        alert('注销', '确认退出登录吗???', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => {
                browserCookie.erase('userid')
                this.props.logoutSubmit()
            }}
          ])
    }

    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(<div>
            <Result
                img={<img src={require(`../img/boy.png`)} style={{ width: 50 }} alt="" />}
                title={props.user}
                message={<ValToLa data={props.sValue}></ValToLa>}
            />
            <List renderHeader={() => '弱势课程'}>
                <Item
                    multipleLine
                >
                    {props.subject}
                </Item>

            </List>
            <WhiteSpace></WhiteSpace>
            <List>
                <Item onClick={this.logoutSubmit}>退出登录</Item>
            </List>
        </div>):<Redirect to={props.redirectTo} />
    }
}    