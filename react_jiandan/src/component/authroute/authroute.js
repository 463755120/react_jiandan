import React from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'
@connect(
    null,
    {loadData}
)
@withRouter
class Authroute extends React.Component {
    componentDidMount() {
        const publist = ['/login','/register']
         const pathname = this.props.location.pathname
         if(publist.indexOf(pathname)>-1){
             return null
         }
        var asyncReadFile = async () => {
            const res = await axios.get('/user/info')
            if (res.status === 200) {
                if(res.data.code ===0 ){
                    this.props.loadData(res.data.data)
                } else{
                    this.props.history.push('/login')
                }
            }
        }
        asyncReadFile()
    }
    render(){
        return null
    }
}
export default Authroute