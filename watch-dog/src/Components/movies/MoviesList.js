import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

class MoviesList extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <>
        <Header as="h2" icon>
          <Icon name="film" />
          Movies
          <Header.Subheader>
            List of Movies
          </Header.Subheader>
        </Header>
      </>
    )
  }
}

export default MoviesList;
