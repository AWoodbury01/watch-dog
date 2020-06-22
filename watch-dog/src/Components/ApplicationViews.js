import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviesList from "./movies/MoviesList";
import ShowsList from "./shows/ShowsList";
import ProfilePage from "./profile/ProfilePage"

class ApplicationViews extends Component {
//   isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {}} />
        <Route exact path="/movies" render={(props) => {
          return <MoviesList {...props} />;
        }} />
        <Route exact path="/shows" render={(props) => {
          return <ShowsList {...props} />;
        }} />
        <Route exact path="/profile" render={(props) => {
          return <ProfilePage {...props} />;
        }} />
        <Route exact path="/" render={(props) => {}} />


      </React.Fragment>
    );
  }
}

export default ApplicationViews;
