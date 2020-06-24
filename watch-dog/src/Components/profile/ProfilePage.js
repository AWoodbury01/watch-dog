import React, { Component } from "react";
import { Header, Icon, Card, Divider } from "semantic-ui-react";
import WatchCard from "../watchlist/WatchCard";
import ContentManager from "../../modules/ContentManager";
import "./Profile.css";

class ProfilePage extends Component {
  state = {
    watchlist: [],
    editID: "",
  };

  deleteWatchListItem = (id) => {
    ContentManager.deleteWatchListItem(id).then(() => {
      ContentManager.getAllWatchList().then((newWatchlist) => {
        this.setState({
          watchlist: newWatchlist,
        })
      })
    })
  }

  componentDidMount() {
    ContentManager.getAllWatchList().then((watchListItems) => {
      this.setState({
        watchlist: watchListItems,
      });
    });
  }

  render() {
    return (
      <>
        <div className="header-container">
          <Header as="h2" icon>
            <Icon name="user" />
            My Profile
            <Header.Subheader>Manage your Watch List</Header.Subheader>
          </Header>
        </div>

      <Divider />

      <div>
      <Header as="h3">
        Watch List
      </Header>
      </div>

        <Card.Group className="watchlist-container">
            {this.state.watchlist.map((content) => {
              return (
                <WatchCard
                  key={content.id}
                  watchlist={content}
                  deleteWatch={this.deleteWatchListItem}
                  {...this.props}
                />
              );
            })}
        </Card.Group>

        <div>
      <Header as="h3">
        Watched List
      </Header>
      </div>

      </>
    );
  }
}

export default ProfilePage;
