import React, { Component } from "react";
import { Form, Modal, Image,  Button, Card, Icon } from "semantic-ui-react";
import ContentManager from "../../modules/ContentManager";
import axios from "axios";
import API_KEY from "../../APIKey";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios
      .get(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${this.state.query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": `${API_KEY}`,
          },
        }
      )
      .then(({ data }) => {
        this.setState({
          results: data.results,
        });
      });
  };

  displaySearchResults = () => {
    ContentManager.getAllSearch().then((searchContent) => {
      this.setState({
        results: searchContent.results,
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <>
        <Form>
          <input
            placeholder="Search ..."
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </Form>
        {this.state.query === "" ? (
          ""
        ) : (
          <Modal trigger={<Button>Search</Button>}>
            <Modal.Header>Search Results</Modal.Header>
            <Modal.Content scrolling>
              {this.state.results.map(r => (
              <Card className="movie-card">
              <Image src={r.picture} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{r.name}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <a href={r.external_ids.imdb.url}>
                  <Icon name="imdb" />
                  IMDb
                </a>
                <a>
                  {r.external_ids.rotten_tomatoes}
                </a>
              </Card.Content>
            </Card>
      ))}
            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
}

export default Search;
