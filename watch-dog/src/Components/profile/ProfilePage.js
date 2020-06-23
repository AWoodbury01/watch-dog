import React, { Component } from "react";
import { Header, Icon, Card, Divider } from "semantic-ui-react";
import WatchCard from "../watchlist/WatchCard";
import ContentManager from "../../modules/ContentManager";
import "./Profile.css";

class ProfilePage extends Component {
  state = {
    watchlist: [],
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
            <Header.Subheader>Manage your profile</Header.Subheader>
          </Header>
        </div>

      <Divider />

      

        <Card.Group className="watchlist-container" itemsPerRow={20}>
            {this.state.watchlist.map((content) => {
              return (
                <WatchCard
                  key={content.id}
                  watchlist={content}
                  {...this.props}
                />
              );
            })}
        </Card.Group>
      </>
    );
  }
}

export default ProfilePage;
