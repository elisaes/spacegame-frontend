import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";


class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  loginHandler = () => {
    this.props.login(this.state);
  };
  render() {
    return (
      <div>
        login
        
      </div>
    );
  }
}

export default Login;
