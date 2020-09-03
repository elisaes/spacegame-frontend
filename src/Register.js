import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import Axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler = () => {
    this.props.register(this.state);
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target)
    const res = await Axios.post(
      "http://localhost:3010/auth/register",
      this.state
    );
    console.log(res);
  };

  render() {
    return (
      <div>
        register
        <Form onChange={this.changeHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" />
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={this.onSubmitHandler}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
