import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import MoviesList from "./movies/MoviesList";
import ShowsList from "./shows/ShowsList";
import ProfilePage from "./profile/ProfilePage";
import Login from "../Components/auth/Login";
import Home from "../Components/home/Home";
import UserForm from "../Components/auth/UserForm";

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/register-account"
          render={(props) => {
            return <UserForm {...props} />;
          }}
        />
        <Route
          exact
          path="/movies"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <MoviesList {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/shows"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <ShowsList {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/profile"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <ProfilePage {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/home"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <Home {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />

        <Route exact path="/" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
