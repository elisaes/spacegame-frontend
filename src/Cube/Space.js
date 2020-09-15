import React, { Component } from "react";
import Logic from "./Logic";
import "../App.css";
import HealthBar from "./healthbar/healthbar";

class Cube extends Component {

  state = {playerHealth : 100}
  

  updatePlayerHealth=(health)=>{
    this.setState({playerHealth : health})
  }

  componentDidMount = () => {

   Logic(this.updatePlayerHealth);
    
  };
  render() {

    return (
      <div>
        <div id="wrapper">
        <HealthBar health={this.state.playerHealth}/>
          <div id="bigContainer">
            <div id="container">
              <div id="cubeWrapper">
                <div className="sides" id="front">
                </div>
                <div className="sides" id="back">
                </div>
                <div className="sides" id="top">
                </div>
                <div className="sides" id="bottom">
                </div>
                <div className="sides" id="left">
                </div>
                <div className="sides" id="rigth">
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="stop">Stop</button>
      </div>
    );
  }
}

export default Cube;
