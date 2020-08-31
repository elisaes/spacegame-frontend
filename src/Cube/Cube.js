import React, { Component } from "react";
import Logic from "./Logic";

import "../App.css";

class Cube extends Component {
  componentDidMount = () => {
    Logic();
  };
  render() {
    return (
      <div id="wrapper">
        <div id="bigContainer">
          <div id="container">

            <div id="CubeWrapper">
            <div className="sides" id="front">
              front
            </div>
            <div className="sides" id="back">
              back
            </div>
            <div className="sides" id="top">
              top
            </div>
            <div className="sides" id="bottom">
              bottom
            </div>
            <div className="sides" id="left">
              left
            </div>
            <div className="sides" id="rigth">
              rigth
            </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
