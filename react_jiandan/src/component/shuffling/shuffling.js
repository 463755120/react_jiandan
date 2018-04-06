import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Shuffling extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slideIndex: 0,
          }
    }
    render(){
        
        const shufflingData =typeof this.props.data === "undefined"? []:this.props.data
        return(<div style={{ marginTop: -10 }}>
            <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {shufflingData.map(val => (
            <a
              key={val}
              href={val.shuffimglink}
              style={{ display: 'inline-block', width: '100%', height: "3rem" }}
            >
              <img
                src={val.shuffimgurl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: "3rem" });
                }}
              />
            </a>
          ))}
        </Carousel>
        </div>)
    }
}