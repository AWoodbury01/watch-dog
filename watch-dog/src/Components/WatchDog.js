import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";

class WatchDog extends Component {
  state = {
    heading: true,
  };

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    );
  }
}

export default WatchDog;