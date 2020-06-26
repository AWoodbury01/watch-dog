import React, { Component } from "react";
import UserRegistation from "../../modules/UserRegistration";
import { Form, Button } from 'react-bootstrap'

class UserForm extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    username: "",
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
      this.state.address === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      window.alert("Please input information in the fields provided below");
    } else {
      this.setState({ loadingStatus: true });
      const users = {
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        
      };
      
      console.log(users);
      UserRegistation.post(users).then().then(() =>
      window.alert("Account Created Successfully") || this.props.history.push("/")
      );
    }
  };
  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/home")
  }

 

  
  render() {
    return (
      <>
      <h1>Account Registration</h1>
       <Form>
  <Form.Group controlId="formBasicEmail">
   
    <Form.Control type="text" placeholder="Name"   onChange={this.handleFieldChange}
                id="name"/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
   
    <Form.Control type="text" placeholder="Address"   onChange={this.handleFieldChange}
                id="address" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Email"  onChange={this.handleFieldChange}
                id="email"/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Username"  onChange={this.handleFieldChange}
                id="username"/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password"  onChange={this.handleFieldChange}
                id="password"/>
  </Form.Group>
  
  <Button variant="primary" type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewUser }  >
    Submit
  </Button>
</Form>
      </>
    );
  }
}

export default UserForm;
