import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="title">
          <Link to="#" className="link">The future of the 🌌 is in your ✋✋</Link>
        </div>
      </div>
    );
  }
}

export default Home;
