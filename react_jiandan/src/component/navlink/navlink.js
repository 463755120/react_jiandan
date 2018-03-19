import React from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
@withRouter
export default class NavLinkBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        const navList = this.props.data
        const {pathname} = this.props.location
        return(<div>
            <TabBar>
				{navList.map(v=>(
					<TabBar.Item
						badge={v.path === '/shopcard'? this.props.unread:0}
						key={v.path}
						title={v.text}
						icon={{uri: require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
						selected={pathname===v.path}
						onPress={()=>{
							this.props.history.push(v.path)
						}}
					>					
					</TabBar.Item>
				))}
			</TabBar>
        </div>)
    }
}    