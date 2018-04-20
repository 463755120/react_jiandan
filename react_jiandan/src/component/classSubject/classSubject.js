import React from 'react'
import { Grid, List, Card } from 'antd-mobile'
import './classSubject.css'

export default class ClassSubject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const classData = typeof this.props.data === "undefined" ? [] : this.props.data;
        return (
            <div>
                {classData.map(v => {

                    return <div className="test2" key ={v._id}>
                        <img className="ad_content_img" src={v.classurl} alt="" />
                        <div className="ad_course_information">
                            <p className="course_title">{v.classtitle}</p>
                            <div className="price_information">
                                <p className="course_price">
                                    <span className="currency">￥</span>{v.classprice}
                                </p>
                                <p>{v.classSubject}</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>

        )
    }
}