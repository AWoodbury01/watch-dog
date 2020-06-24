import React, { Component } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "../profile/Profile.css";

class WatchCard extends Component {
  render() {
    return (
      <Card className="watchcard">
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.watchlist.title}</Card.Header>
          <Card.Description>
            My Review: 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button animated="vertical">
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
              <Icon name="edit outline" />
            </Button.Content>
          </Button>
          <Button 
          animated="vertical"
          onClick={() => this.props.deleteWatch(this.props.watchlist.id)}
          >
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="trash alternate outline" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default WatchCard;
