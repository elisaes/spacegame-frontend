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
        <Container>
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
          <Button onClick={this.loginHandler}>Login</Button>
        </Container>
      </div>
    );
  }
}

export default Login;
