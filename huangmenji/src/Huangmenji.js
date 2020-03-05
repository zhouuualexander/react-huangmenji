import React ,{ Component } from "react";
import "./Cal.css"
import AnalogClock from 'analog-clock-react';
import ComposedTextField from '../src/component/Form.js';
let options = {
    "width": "100px",
  "border": true,
  "borderColor": "#2D111B",
  "baseColor": "#1F426B",
  "centerColor": "#BFB5E5",
  "handColors": {
    "second": "#745595",
    "minute": "#037DF1",
    "hour": "#60B380"
    }
};


export class Huangmenji extends Component{
    constructor(props) {
        super(props);
        this.state = {
          weight:4,
        
        };
      }
      handleClick = () => {
        //do something
        console.log(this.state);
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {weight: 11111}
          });
        // should be something like this {
        //  firstName: '',
        //  lastName: '',
        //  place: '',
        //  address: '',
        //  email: '',
        //  phoneNumber: ''
        //}
      }
    render(){
        return(
            <div >
                <h1 className="title">黄焖鸡配料计算器</h1>
                <div className="clock"><AnalogClock {...options} />
                </div>
                <div className="wrapper">
            <ComposedTextField/>
            </div>
            <button className="cal" onClick={this.handleClick}>算一下</button>
            
            <div className="蚝油"><p1>蚝油：{this.state.weight}g</p1></div>
            <div className="海鲜酱"><p1>海鲜酱：{this.state.weight}g</p1></div>
            <div className="味极鲜"><p1>味极鲜：{this.state.weight}g</p1></div>
            <div className="草菇老抽"><p1>草菇老抽：{this.state.weight}g</p1></div>
            <div className="鲍鱼汁"><p1>鲍鱼汁：{this.state.weight}g</p1></div>
            <div className="姜"><p1>姜：{this.state.weight}g</p1></div>
            
            
            </div>
          
        )
    }
}