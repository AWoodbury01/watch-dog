import React, { Component } from "react";
import { Header, Icon, Divider } from "semantic-ui-react";

class ShowsList extends Component {
  render() {
    return (
      <>
        <div className="header-container">
          <Header as="h2" icon>
            <Icon name="tv" />
            TV Shows
          </Header>
        </div>

      <Divider />
      </>
    );
  }
}

export default ShowsList;
