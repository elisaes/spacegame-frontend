import React, { Component } from "react";
import "./healthbar.css";

class HealthBar extends Component {

    constructor(props){
        super(props)
        this.rotation = 0;
        this.rotationV = 0;
        this.rotA = 0.01;
        this.maxHealth = 100;
        this.maxLength = 1000;
    }
    
  componentDidMount = () => {
      this.healthBarContainer = document.querySelector(".healthbar-container")
      this.healthBarFront =  document.querySelector("#healthbar-front")
      this.healthBarTop =  document.querySelector("#healthbar-top")
      this.healthBarRight =  document.querySelector("#healthbar-right")

      this.doLoop()
  };

  doLoop=()=>{
      setInterval(()=>{
        this.rotationV += this.rotA;
          this.rotation+=this.rotationV;
          if (this.rotation > 20){
              this.rotA = -0.01
          } else if (this.rotation < -20){
              this.rotA = 0.01
          } else {
              this.rotA = -0.003
          }
          this.healthBarContainer.style.transform = `rotateX(${this.rotation}deg)`
          this.healthBarTop.style.width = `${this.props.health/this.maxHealth*this.maxLength}px`
          this.healthBarFront.style.width = `${this.props.health/this.maxHealth*this.maxLength}px`
          this.healthBarRight.style.transform = `rotateY(270deg) translateX(25px) translateZ(-${this.props.health/this.maxHealth*this.maxLength-50}px) translateY(-25px)`

        },20)
  }
  render() {
    return (
      <div className="healthbar-wrapper">
        <div className="healthbar-container" >
          <div className="healthbar-sides" id="healthbar-front">
            front
          </div>
          <div className="healthbar-sides" id="healthbar-back">
            back
          </div>
          <div className="healthbar-sides" id="healthbar-top">
            top
          </div>
          <div className="healthbar-sides" id="healthbar-bottom">
            bot
          </div>
          <div className="healthbar-sides" id="healthbar-left">
            left
          </div>
          <div className="healthbar-sides" id="healthbar-right">
            right
          </div>
        </div>
      </div>
    );
  }
}

export default HealthBar;
