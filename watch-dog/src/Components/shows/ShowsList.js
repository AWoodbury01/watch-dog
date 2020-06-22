import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class ShowsList extends Component {
  render() {
    return (
      <>
        <Header as="h2" icon>
          <Icon name="tv" />
          TV Shows
          <Header.Subheader>List of TV Shows</Header.Subheader>
        </Header>
      </>
    );
  }
}

export default ShowsList;
