import React, { Component } from "react";
import { Route } from "react-router-dom";

class ApplicationViews extends Component {
//   isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {}} />
        <Route exact path="/movies" render={(props) => {}} />
        <Route exact path="/tv-shows" render={(props) => {}} />
        <Route exact path="/account" render={(props) => {}} />
        <Route exact path="/" render={(props) => {}} />


      </React.Fragment>
    );
  }
}

export default ApplicationViews;
