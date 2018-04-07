import React from 'react'
import { Grid, List, Card } from 'antd-mobile'
import styled from 'styled-components';
import './classSubject.css'

export default class ClassSubject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const GroupCard = styled(Card) `
        margin-top: 10px;
        background-color: yellow;
     `;
        return (
            <div>
                <div className="ad_content">
                    <img className="ad_content_img" src="http://image.jiandan100.cn/images/packages/20180215011.png" alt="" />
                        <div className="ad_course_information">
                            <p className="course_title">2017-2021年巨无霸（移动课堂VIP版）（六三制）	</p>
                            <div className="price_information">
                                <p className="course_price">
                                    <span className="currency">￥</span>7500
                                </p>
                            </div>
                        </div>
                  </div>
                </div>
                )
    }
}