import React from 'react'
import { Grid, List,Picker } from 'antd-mobile'

export default class Courselist extends React.Component {
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
    render(){
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
                    label: '三年级',
                    value: '3',
                },
                {
                    label: '二年级',
                    value: '2',
                },
                {
                    label: '一年级',
                    value: '1',
                }
            ]
        ];
        return(<div>
            <Picker
                data={seasons}
                title="选择年级"
                cascade={false}
                extra='请选择'
                value={this.state.sValue}
                onChange={v => this.setState({ sValue: v })}
                onOk={v => this.setState({ sValue: v })}
            >
                <List.Item arrow="horizontal">选择年级</List.Item>
            </Picker>
        </div>)
    }
}    