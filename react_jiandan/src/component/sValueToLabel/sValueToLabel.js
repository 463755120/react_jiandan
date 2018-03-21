import React from 'react'

export default class ValToLa extends React.Component{
	constructor(props){
		super(props)
    }
    render(){
        const sValue = this.props.data
        const valuList = {
            c1:"初中一年级",
            c2:"初中二年级",
            c3:"初中三年级",
            g1:"高中一年级",
            g2:"高中二年级",
            g3:"高中三年级",
        }
        return(<div>
            {valuList[sValue]}
        </div>)
    }
}    