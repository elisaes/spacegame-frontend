import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import Space from "./Cube/Space";
import Login from "./auth/Login";
import Home from "./Home";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Register" exact render={() => <Register />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/game" exact render={() => <Space />} />

          <Space />
        </Switch>
      </Router>
    );
  }
}

export default App;
