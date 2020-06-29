import React, { Component } from "react";
import { Form, Container, Button, Input } from "semantic-ui-react";
import LoginManager from "../../modules/LoginManager";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  //handleLogin function fetches user's information from JSON using email
  //   if the email doesn't exist, then an alert will pop up prompting the user to try again
  // if the email exists, we then check the password and if the condition is true, we are setting userId, username and credential (email and password) in the localStorage
  // then we get redirected to the Home page and the user can click on whatever page they want
  // if the email exists, but password doesn't match, then an alert will appear notifying the user that the password doesn't match

  handleLogin = (e) => {
    e.preventDefault();

    LoginManager.loginAccount(this.state.email).then((user) => {
      if (user.length === 0) {
        window.alert(
          `I'm sorry! The email you entered is not in our system. Please try again!`
        );
      } else {
        if (this.state.password === user[0].password) {
          localStorage.setItem("userId", user[0].id);
          localStorage.setItem("name", user[0].name);
          localStorage.setItem(
            "credentials",
            JSON.stringify({
              email: this.state.email,
              password: this.state.password,
            })
          );
          this.props.history.push("/home");
        } else {
          window.alert(
            `I'm sorry! The password you entered does not exist with the email: ${this.state.email}  Please try again!`
          );
        }
      }
    });
  };

  render() {
    return (
      <>
        <br />
        <Container className="login-form center">
          <h2 className="login-heading">
            Welcome to Watch Dog!
            <br />
            <small>Please sign in</small>
          </h2>
          <Form onSubmit={this.handleLogin}>
            <Form.Field>
              <Input
                size="small"
                type="email"
                id="email"
                iconPosition="left"
                icon="mail"
                onChange={this.handleFieldChange}
                placeholder="Enter email"
                required=""
              />
            </Form.Field>
            <Form.Field>
              <Input
                size="small"
                type="password"
                id="password"
                iconPosition="left"
                icon="circle"
                onChange={this.handleFieldChange}
                placeholder="Password"
                required=""
              />
            </Form.Field>
            <Button type="submit">Log In </Button>
            <Button 
            href="/register-account"
            >Create New Account 
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Login;