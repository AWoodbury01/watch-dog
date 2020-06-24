import React, { Component } from "react";
import { Header, Icon, Divider, Card } from "semantic-ui-react";
import ContentManager from "../../modules/ContentManager"
import MovieCard from "./MovieCard"
import "../profile/Profile.css"

class MoviesList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    ContentManager.getAllMovies("prestige").then((movies) => {
      
      console.log(movies)
      
      this.setState({
        movies: movies.results,
      });
    });
  }


  render() {
    return (
      <>
        <div className="header-container">
          <Header as="h2" icon>
            <Icon name="film" />
            Movies
          </Header>
        </div>

        <Divider />

        <Card.Group className="watchlist-container">
            {this.state.movies.map((content) => {
              return (
                <MovieCard
                  key={content.id}
                  movie={content}
                  {...this.props}
                />
              )
            })}
        </Card.Group>
      </>
    )
  }
}

export default MoviesList;
