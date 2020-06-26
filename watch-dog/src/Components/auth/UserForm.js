import React, { Component } from "react";
import UserRegistration from "../../modules/UserRegistration";
import { Form, Button } from "semantic-ui-react";

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewUser = (evt) => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const users = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      console.log(users);
      UserRegistration.post(users)
        .then()
        .then(
          () =>
            window.alert("Account Created Successfully") ||
            this.props.history.push("/")
        );
    }
  };
  handleLogin = (e) => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      })
    );
    this.props.history.push("/home");
  };

  render() {
    return (
      <>
        <h1>Account Registration</h1>
        <Form>
          <Form.Field>
            <input
              type="text"
              placeholder="Name"
              onChange={this.handleFieldChange}
              id="name"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Email"
              onChange={this.handleFieldChange}
              id="email"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleFieldChange}
              id="password"
            />
          </Form.Field>

          <Button
            variant="primary"
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.constructNewUser}
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default UserForm;
