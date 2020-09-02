import React, { Component } from "react";
import Logic from "./Logic";
import "../App.css";

class Cube extends Component {
  componentDidMount = () => {

   Logic();
    
  };
  render() {
    console.log("Render",Date.now())

    return (
      <div>
        <div id="wrapper">
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
