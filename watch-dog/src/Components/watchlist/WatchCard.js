import React, { Component } from "react";
import { Card, Icon, Image, Button, Checkbox } from "semantic-ui-react";
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
          <Button.Group>
          <Button 
          animated="vertical"
          color="teal"
          >
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
              <Icon name="edit outline" />
            </Button.Content>
          </Button>
          <Button 
          animated="vertical"
          color="red"
          onClick={() => this.props.deleteWatch(this.props.watchlist.id)}
          >
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="trash alternate outline" />
            </Button.Content>
          </Button>
          </Button.Group>
          <Checkbox slider 
          checked={this.props.watchlist.watched === true ? true : false}
          label="Watched"
          id={this.props.watchlist.id}
          onClick={() => 
          this.props.watchlist.watched === true ? (this.props.falseWatch(this.props.watchlist.id)) 
          :
          (this.props.trueWatch(this.props.watchlist.id))
          }
          />
        </Card.Content>
      </Card>
    );
  }
}

export default WatchCard;
