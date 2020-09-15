import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    // if (this.state.authenticated){
    //   return <Redirect to="game"/>
    // }
    return (
      <div className="d-flex flex-row justify-content-center align-items-center background">
        <div>
          <a href="game" className="link">
            The war has begin, the evil spheres are trying to destroy the
            universe, and the only hope is the cube hero. The destiny of all the
            universe is in your hands.
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
