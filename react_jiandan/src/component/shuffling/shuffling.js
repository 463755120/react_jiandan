import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Shuffling extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
          }
    }
    render(){
        return(<div style={{ marginTop: -10 }}>
            <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        </div>)
    }
}