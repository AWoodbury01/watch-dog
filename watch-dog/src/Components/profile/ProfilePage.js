import React, { Component } from "react";
import { Header, Icon, Card, Divider } from "semantic-ui-react";
import WatchCard from "../watchlist/WatchCard";
import ContentManager from "../../modules/ContentManager";
import "./Profile.css";

class ProfilePage extends Component {
  state = {
    watchlist: [],
    editID: "",
    checked: false,
  };

  toggle = () =>
    this.setState((prevState) => ({ checked: !prevState.checked }));

  trueWatch = (id) => {
    ContentManager.truePatch(id).then(() => {
      ContentManager.getAllWatchList().then((newWatchlist) => {
        this.setState({
          watchlist: newWatchlist,
        });
      });
    });
  };

  falseWatch = (id) => {
    ContentManager.falsePatch(id).then(() => {
      ContentManager.getAllWatchList().then((newWatchlist) => {
        this.setState({
          watchlist: newWatchlist,
        });
      });
    });
  };

  deleteWatchListItem = (id) => {
    ContentManager.deleteWatchListItem(id).then(() => {
      ContentManager.getAllWatchList().then((newWatchlist) => {
        this.setState({
          watchlist: newWatchlist,
        });
      });
    });
  };


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
          <Header as="h2" className="watchlist-header">
            Watch List
          </Header>
        </div>

        <div className="watchlist-parent">
          <Card.Group className="watchlist-container">
            {this.state.watchlist.map((content) =>
              content.watched === false ? (
                <WatchCard
                  key={content.id}
                  watchlist={content}
                  deleteWatch={this.deleteWatchListItem}
                  trueWatch={this.trueWatch}
                  falseWatch={this.falseWatch}
                  onChange={this.toggle}
                  checked={this.state.checked}
                  {...this.props}
                />
              ) : (
                ""
              )
            )}
          </Card.Group>
        </div>

        <Divider />

        <div>
          <Header as="h2" className="watchlist-header">
            Watched List
          </Header>
        </div>

        <div className="watchlist-parent">
          <Card.Group className="watchlist-container">
            {this.state.watchlist.map((content) =>
              content.watched === true ? (
                <WatchCard
                  key={content.id}
                  watchlist={content}
                  deleteWatch={this.deleteWatchListItem}
                  trueWatch={this.trueWatch}
                  falseWatch={this.falseWatch}
                  onChange={this.toggle}
                  checked={this.state.checked}
                  {...this.props}
                />
              ) : (
                ""
              )
            )}
          </Card.Group>
        </div>
      </>
    );
  }
}

export default ProfilePage;
