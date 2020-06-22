import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Header as="h2" icon>
          <Icon name="user" />
          My Profile
          <Header.Subheader>Manage your profile</Header.Subheader>
        </Header>
      </>
    );
  }
}

export default ProfilePage;
