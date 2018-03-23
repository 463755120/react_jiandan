import React from 'react'
import Shuffling from '../../component/shuffling/shuffling'
import {connect} from 'react-redux'
import {homePage} from '../../redux/index.redux'

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
        this.props.homePage()
    }
    render(){
        return(<div>       
            <Shuffling></Shuffling>
        </div>)
    }
}