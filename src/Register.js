import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  registerHandler = () => {
    this.props.register(this.state);
  };

  render() {
    return (
      <div>
        register
        <Container>
          <Row>
            <Form.Control
              name="firstname"
              type="firstname"
              onChange={this.changeHandler}
            ></Form.Control>
          </Row>
          <Row>
            <Form.Control
              name="lastname"
              type="lastname"
              onChange={this.changeHandler}
            ></Form.Control>
          </Row>
          <Row>
            <Form.Control
              name="email"
              type="email"
              onChange={this.changeHandler}
            ></Form.Control>
          </Row>
          <Row>
            <Form.Control
              name="password"
              type="password"
              onChange={this.changeHandler}
            ></Form.Control>
          </Row>
          <Button onClick={this.registerHandler}>Register</Button>
        </Container>
      </div>
    );
  }
}

export default Register;
