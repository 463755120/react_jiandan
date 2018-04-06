import React from 'react'
import { NavBar, InputItem, TextareaItem, Button, Icon, Picker, List } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'
import styled from 'styled-components';
import './usreinFo.css'
@connect(
    state=>state.user,
    {update}
)
export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sValue: [],
            school: '',
            subject: ''
        }
        
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        const BreadcrumbStyled = styled(Picker)`
        font-size: 1.5em;
 `;
    console.log(BreadcrumbStyled)
        const path = this.props.location.pathname
        const test = {fontSize:18}
        const redirect = this.props.redirectTo
        const seasons = [
            [
                {
                    label: '初中',
                    value: 'c',
                },
                {
                    label: '高中',
                    value: 'g',
                }
            ],
            [
                {
                    label: '三年纪',
                    value: '3',
                },
                {
                    label: '二年纪',
                    value: '2',
                },
                {
                    label: '一年纪',
                    value: '1',
                }
            ]
        ];
        return (<div>
            {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
            <NavBar mode='dard'
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.goBack() }}
            >
                完善信息
            </NavBar>
            <InputItem onChange={(v) => this.onChange('school', v)}>
                学校名称
            </InputItem>
            <Picker
                data={seasons}
                title="选择入学时间"
                cascade={false}
                extra='请选择'
                value={this.state.sValue}
                onChange={v => this.setState({ sValue: v })}
                onOk={v => this.setState({ sValue: v })}
                style={{ borderBottom: '1PX solid #ddd;' }}
            >
                <List.Item arrow="horizontal">选择年纪</List.Item>
            </Picker>
            <TextareaItem
                onChange={(v) => this.onChange('subject', v)}
                rows={3}
                autoHeight
                title='弱势科目'
                style={{ borderBottom: '1PX solid #ddd;' }}
            >
            </TextareaItem>
            <Button
                onClick={() => {
                    this.props.update(this.state)
                    //如果不清空Picker的value,会报错。
                    this.setState({
                        sValue:[]
                    })
                }}
                type="primary"
            >保存</Button>
        </div>)
    }
}
