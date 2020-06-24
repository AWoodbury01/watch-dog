import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../profile/Profile.css";

class MovieCard extends Component {
  render() {
    return (
      <Card className="movie-card">
        <Image src={this.props.movie.picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.movie.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href={this.props.movie.external_ids.imdb.url}>
            <Icon name="imdb" />
            IMDb
          </a>
          <a>
            <Icon name="imdb" />
            {this.props.movie.external_ids.rotten_tomatoes}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default MovieCard;
