import React, { Component } from "react";
import {
  Form,
  Button,
  Grid,
  Message,
  Segment,
  Header,
  Image,
} from "semantic-ui-react";
import LoginManager from "../../modules/LoginManager";
import "./Login.css";
import pawprint from "../images/pawprint.ico"

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
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal">
              <Image src="data:image/png;base64,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" /> Welcome to Watch Dog
            </Header>
            <Form size="large" onSubmit={this.handleLogin}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  id="email"

                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this.handleFieldChange}
                  required=""
                />
                <Form.Input
                  fluid
                  icon="lock"
                  id="password"

                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleFieldChange}
                  required=""
                />
              <Button color="teal" fluid size="large" type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account? <a href="/register-account">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Login;
