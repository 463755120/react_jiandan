import React from 'react'
import Shuffling from '../../component/shuffling/shuffling'

export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
          }
    }
    render(){
        return(<div>       
            <Shuffling></Shuffling>
        </div>)
    }
}