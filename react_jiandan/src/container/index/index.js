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
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
          }
    }
    componentDidMount() {
        this.props.homePage()
    }
    render(){
        return(<div>       
            <Shuffling></Shuffling>
        </div>)
    }
}