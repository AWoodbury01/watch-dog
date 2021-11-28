import React, { Component } from "react";
import {
  Form,
  Modal,
  Image,
  Button,
  Card,
  Icon,
  Label,
} from "semantic-ui-react";
import ContentManager from "../../modules/ContentManager";
import axios from "axios";
import API_KEY from "../../APIKey";
import "../profile/Profile.css";

class Search extends Component {
  state = {
    query: "",
    results: [],
    loadingStatus: false
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

  addWatchListItem = (newContent) => {
    ContentManager.postWatchListItem(newContent).then(() => {
      ContentManager.getAllWatchList();
    });
  };

  createNewWatchListItem = (results) => {
    const newlyCreatedWatchListItem = {
      userId: localStorage.getItem("userId"),
      title: results.name,
      url: results.picture,
      review: "",
      watched: false,
      imdb: results.external_ids.imdb.url,
      wiki: results.external_ids.wiki_data.url
    };
    this.addWatchListItem(newlyCreatedWatchListItem);
    this.setState({loadingStatus: true})
    }

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
          <Modal closeOnDocumentClick="true" small trigger={<Button>Search</Button>}
          closeIcon 
          >
            <Modal.Header>Search Results</Modal.Header>
            <Modal.Content scrolling>
              {/* {this.state.results.map((r) => (
                // Sample Card 1
                <Card className="movie-card" key={r.id}>
                  <Image src={r.picture} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{r.name}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="searchcard-btns">
                      <div className="imdb-btn">
                        <Label
                          color="grey"
                          href={r.external_ids.imdb.url} target="_blank">
                          <Icon name="imdb" />
                          IMDb
                        </Label>
                      </div>
                      <div className="add-to-watchlist-btn">
                        <Label
                        color="green"
                          as="a"
                          onClick={() => this.createNewWatchListItem(r)}
                        >
                          <Icon name="plus" /> Add to Watchlist
                        </Label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              ))} */}
              {/* Sample Card 1 */}
                <Card className="movie-card" >
                  <Image src="/oceanseleven.jpg" wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Ocean's Eleven</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="searchcard-btns">
                      <div className="imdb-btn">
                        <Label
                          color="grey"
                          href="https://www.imdb.com/title/tt0240772/" target="_blank">
                          <Icon name="imdb" />
                          IMDb
                        </Label>
                      </div>
                      <div className="add-to-watchlist-btn">
                        <Label
                        color="green"
                          as="a"
                          // TODO: Hard coded results. Make this button work
                          // onClick={() => this.createNewWatchListItem(r)}
                        >
                          <Icon name="plus" /> Add to Watchlist
                        </Label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              {/* Sample Card 2 */}
                <Card className="movie-card" >
                  <Image src="/oceanstwelve.jpeg" wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Ocean's Twelve</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="searchcard-btns">
                      <div className="imdb-btn">
                        <Label
                          color="grey"
                          href="https://www.imdb.com/title/tt0349903/?ref_=nv_sr_srsg_0" target="_blank">
                          <Icon name="imdb" />
                          IMDb
                        </Label>
                      </div>
                      <div className="add-to-watchlist-btn">
                        <Label
                        color="green"
                          as="a"
                          // TODO: Hard coded results. Make this button work
                          // onClick={() => this.createNewWatchListItem(r)}
                        >
                          <Icon name="plus" /> Add to Watchlist
                        </Label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              {/* Sample Card 3 */}
                <Card className="movie-card" >
                  <Image src="/oceansthirteen.png" wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Ocean's Thirteen</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="searchcard-btns">
                      <div className="imdb-btn">
                        <Label
                          color="grey"
                          href="https://www.imdb.com/title/tt0496806/?ref_=nv_sr_srsg_0" target="_blank">
                          <Icon name="imdb" />
                          IMDb
                        </Label>
                      </div>
                      <div className="add-to-watchlist-btn">
                        <Label
                        color="green"
                          as="a"
                          // TODO: Hard coded results. Make this button work
                          // onClick={() => this.createNewWatchListItem(r)}
                        >
                          <Icon name="plus" /> Add to Watchlist
                        </Label>
                      </div>
                    </div>
                  </Card.Content>
                </Card>

            </Modal.Content>
          </Modal>
        )}
      </>
    );
  }
}

export default Search;
