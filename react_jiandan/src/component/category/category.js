import React from 'react'
import { Grid, List, } from 'antd-mobile'
import { Route,Link } from 'react-router-dom'

export default class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const categoryData = typeof this.props.data === "undefined" ? [] : this.props.data
        const avatarList = categoryData.map(v => ({
            icon: v.categoryurl,
            text: v.categorylink,
            _id:v._id
        }))
        return (
            <div>
                <Grid
                    data={avatarList}
                    columnNum={4}
                    hasLine = {false}
                    onClick={elm => {
                        
                    }}
                    renderItem={avatarList => (
                        <Link to={{
                            pathname: '/courselist',
                            search: `?id=${avatarList._id}`,
                            state: avatarList.index
                          }}>
                        <div style={{ padding: '10px' }}>
                          <img src={avatarList.icon} style={{ width: '1.2rem', height: '1.2rem' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '1px' }}>
                            <span>{avatarList.text}</span>
                          </div>
                        </div>
                        </Link>
                      )}
                />
            </div>
        )
    }
}