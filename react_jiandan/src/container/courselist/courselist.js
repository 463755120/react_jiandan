import React from 'react'
import { Grid, List,Picker } from 'antd-mobile'
import ClassSubject from '../../component/classSubject/classSubject'
import {connect} from 'react-redux'
import {homePage,courselist} from '../../redux/index.redux'
@connect(
	state=>state.index,
	{homePage,courselist}
)

export default class Courselist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sValue: [],
            school: '',
            subject: ''
        }
        
    }
    componentDidMount() {
        //如果已有数据则不进行请求
        if(typeof this.props.courselistData === "undefined"){
            this.props.courselist({classSubject:""}) 
        }  
    }
    onselect(val) {
        this.props.courselist({classSubject:val[0]})    
    }
    render(){
        const courselistData = typeof this.props.courselistData === "undefined" ? [] : this.props.courselistData;
        const seasons = [
            [
                {
                    label: '全部',
                    value: '',
                },
                {
                    label: '语文',
                    value: '语文',
                },
                {
                    label: '数学',
                    value: '数学',
                },
                {
                    label: '英语',
                    value: '英语',
                },
                {
                    label: '物理',
                    value: '物理',
                }
            ]
        ];
        return(<div>
            <Picker
                data={seasons}
                title="选择科目"
                cascade={false}
                extra='请选择'
                value={this.state.subject}
                onChange={v => this.onselect(v)}
                onOk={v => this.setState({ subject: v })}
            >
                <List.Item arrow="horizontal">选择科目</List.Item>
            </Picker>
            <ClassSubject data ={courselistData}></ClassSubject>
        </div>)
    }
}    