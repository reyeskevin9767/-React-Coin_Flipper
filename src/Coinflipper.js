import React, {Component} from 'react';
import Coin from "./Coin";
import "./Coinflipper.css";

class Coinflipper extends Component{
    constructor(props){
        super(props);
        this.state = { TotalNum: 0, Heads: 0, Tails: 0, TailSide: true};
        this.handleClick = this.handleClick.bind(this);
    }

    generate(){
                
        const landedSide =  Math.floor(Math.random() * 2);

        if(landedSide === 1){
            this.setState(curState => ({
            Heads: curState.Heads + 1,
            TailSide: true
        }));
        }else{
            this.setState(curState => ({
            Tails: curState.Tails + 1,
            TailSide: false
        }));
        }
        
        this.setState(curState => ({
            TotalNum: curState.Tails + curState.Heads
        }));
    }

    handleClick(){
        this.generate();
    }

    render(){
        return(
            <div className="Coinflipper-body">
                <Coin Total = {this.state.TotalNum} HeadsTotal = {this.state.Heads} TailsTotal = {this.state.Tails} TailSide = {this.state.TailSide}/>
                <button onClick={this.handleClick}>Flip The Coin</button>
            </div>
        )
    }
}

export default Coinflipper;