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
          weight:0,
          chicken:"",
          蚝油:0,
          海鲜酱:0,
          味极鲜:0,
          草菇老抽:0,
          鲍鱼汁:0,
          姜:0,
          水:0,
        };
      }
      handleClick = () => {
        //do something
        console.log(this.state);
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {weight: this.state.chicken,
            蚝油:Math.round(this.state.chicken/14.9),
        海鲜酱:Math.round(this.state.chicken/100),
    味极鲜:Math.round(this.state.chicken/76.9),
草菇老抽:Math.round(this.state.chicken/125),
鲍鱼汁:Math.round(this.state.chicken/90.9),
姜:Math.round(this.state.chicken/34.48),
水:Math.round(this.state.chicken/2)} // chicken * 10 for temp calculation algorithm
          });
       
      }
    render(){
        return(
            <div >
                <h1 className="title">黄焖鸡配料计算器</h1>
                <div className="clock"><AnalogClock {...options} />
                </div>
                <div className="wrapper">
            <ComposedTextField value={this.state.chicken} onChange={(value)=>{this.setState({chicken: value})}}/>
            </div>
            <button className="cal" onClick={this.handleClick}>算一下</button>
            
            <div className="蚝油"><p1>蚝油：{this.state.蚝油}g</p1></div>
            <div className="海鲜酱"><p1>海鲜酱：{this.state.海鲜酱}g</p1></div>
            <div className="味极鲜"><p1>味极鲜：{this.state.味极鲜}g</p1></div>
            <div className="草菇老抽"><p1>草菇老抽：{this.state.草菇老抽}g</p1></div>
            <div className="鲍鱼汁"><p1>鲍鱼汁：{this.state.鲍鱼汁}g</p1></div>
            <div className="姜"><p1>姜：{this.state.姜}g</p1></div>
            <div className="水"><p1>水：{this.state.水}g</p1></div>
            
            
            </div>
          
        )
    }
}
