import React, { Component } from "react";
import { Header, Icon, Container } from "semantic-ui-react";
import WatchCard from "../watchlist/WatchCard";
import ContentManager from "../../modules/ContentManager";

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
        <Header as="h2" icon>
          <Icon name="user" />
          My Profile
          <Header.Subheader>Manage your profile</Header.Subheader>
        </Header>

        <Container>
          {this.state.watchlist.map((content) => (
            <WatchCard 
            key={content.id} 
            watchlist={content}
            {...this.props} 
            />
          ))}
        </Container>
      </>
    );
  }
}

export default ProfilePage;
