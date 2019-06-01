import React, {Component} from 'react';
import "./Coin.css";
import { totalmem } from 'os';
class Coin extends Component{
    render(){
        return(
            <div className="Coin-Body">
                <h1>Flip This Coin</h1>
                <img src={this.props.TailSide ? "./Heads.png" : "./Tails.png"} />
                <p>Out of {this.props.Total}, there have been {this.props.HeadsTotal} heads and {this.props.TailsTotal} tails.</p>
            </div>
        )
    }
}

export default Coin;