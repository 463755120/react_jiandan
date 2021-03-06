import React from 'react'
import { WhiteSpace} from 'antd-mobile';
import Shuffling from '../../component/shuffling/shuffling'
import Category from '../../component/category/category'
import ClassSubject from '../../component/classSubject/classSubject'
import {connect} from 'react-redux'
import {homePage} from '../../redux/index.redux'
import styled from 'styled-components';

@connect(
	state=>state.index,
	{homePage}
)
export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            shuffData: [],
            categoryData:[],
            ClassData: [],
          }
    }
    componentDidMount() {
        //如果已有数据则不进行请求
        if(typeof this.props.shuffData === "undefined"){
            this.props.homePage()
        }   
        
    }
    render(){
        const props = this.props
        return(<div>       
            <Shuffling data ={props.shuffData}></Shuffling>
            <WhiteSpace/>
            <Category data ={props.categoryData}></Category>
            <WhiteSpace/>
            <ClassSubject data ={props.classData}></ClassSubject>
        </div>)
    }
}
