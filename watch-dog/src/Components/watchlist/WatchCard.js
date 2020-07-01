import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Button,
  Checkbox,
  Confirm,
} from "semantic-ui-react";
import "../profile/Profile.css";
import ContentManager from "../../modules/ContentManager";

class WatchCard extends Component {
  refreshAfterDelete = (id) => {
    this.props.deleteWatch(id)
  };

  render() {
    return (
      <Card className="watchcard">
        <Image src={this.props.watchlist.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.watchlist.title}</Card.Header>
          <Card.Description>My Review:</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="extra-card-contents">
            <div className="card-btns-container">
              <Button.Group>
                <Button animated="vertical" color="teal">
                  <Button.Content hidden>Edit</Button.Content>
                  <Button.Content visible>
                    <Icon name="edit outline" />
                  </Button.Content>
                </Button>
                <Button
                  animated="vertical"
                  color="red"
                  onClick={() =>
                    this.refreshAfterDelete(this.props.watchlist.id)}
                >
                  <Button.Content hidden>Delete</Button.Content>
                  <Button.Content visible>
                    <Icon name="trash alternate outline" />
                  </Button.Content>
                </Button>
              </Button.Group>
              {/* <Confirm
                size="tiny"
                confirmButton="Delete"
                open={this.props.onOpen}
                onCancel={this.props.close}
                onConfirm={() =>
                  this.refreshAfterDelete(this.props.watchlist.id)
                }
              /> */}
            </div>

            <div className="checkbox-container">
              <Checkbox
                slider
                checked={this.props.watchlist.watched === true ? true : false}
                label="Watched"
                id={this.props.watchlist.id}
                onClick={() =>
                  this.props.watchlist.watched === true
                    ? this.props.falseWatch(this.props.watchlist.id)
                    : this.props.trueWatch(this.props.watchlist.id)
                }
              />
            </div>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default WatchCard;
