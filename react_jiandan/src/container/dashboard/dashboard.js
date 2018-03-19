import React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile'
import { Switch, Route } from 'react-router-dom'
import NavLinkBar from '../../component/navlink/navlink'
import Courselist from '../courselist/courselist'

function Index() {
    return <h2>主页...</h2>
}
function Shopcard() {
    return <h2>购物车</h2>
}
function User() {
    return <h2>个人主页</h2>
}
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { pathname } = this.props.location
        if(pathname == '/'){pathname = '/index'}
        const user = this.props.user
        const navList = [
            {
                path: '/index',
                text: '电商首页',
                icon: 'boss',
                title: '电商首页',
                component: Index,
            },
            {
                path: '/courselist',
                text: '课程列表',
                icon: 'msg',
                title: '课程列表',
                component: Courselist,
            },
            {
                path: '/shopcard',
                text: '购物车',
                icon: 'msg',
                title: '购物车',
                component: Shopcard
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        return (<div>
            <NavBar mode='dard'
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.goBack() }}
            >
                {navList.find(v=>v.path==pathname).title}
            </NavBar>
            <div style={{ marginTop: 45 }}>
                <Switch>
                    {navList.map(v => (
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                    ))}
                </Switch>
            </div>
            <NavLinkBar data={navList}></NavLinkBar>
        </div>)
    }
}