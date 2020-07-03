import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Button,
  Checkbox,
  Confirm,
  Modal,
  Header,
  Form,
  TextArea,
  Label,
} from "semantic-ui-react";
import "../profile/Profile.css";

class WatchCard extends Component {
  state = {
    reviewText: this.props.watchlist.review,
    loadingStatus: false,
    modalOpen: false,
    open: false,
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false, loadingStatus: true });

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleEditFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  makeEditedReview = () => {
    const editedReview = {
      id: this.props.watchlist.id,
      title: this.props.watchlist.title,
      url: this.props.watchlist.url,
      review: this.state.reviewText,
      watched: this.props.watchlist.watched,
      userId: localStorage.getItem("userId"),
      imdb: this.props.watchlist.imdb,
      wiki: this.props.watchlist.wiki
    };

    this.props.handleUpdate(editedReview, this.props.watchlist.id);
  };

  refreshAfterDelete = (id) => {
    this.props.deleteWatch(id);
    this.setState({ loadingStatus: true });
  };

  render() {
    return (
      <Card raised className="watchcard">
        <Image src={this.props.watchlist.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header className="watchcard-title">
            {this.props.watchlist.title}
          </Card.Header>
          <Card.Description>
            <div className="searchcard-btns watchcard-icons">
              <div className="imdb-btn">
                <Label color="grey" href={this.props.watchlist.imdb} target="_blank">
                  <Icon name="imdb" size="small"/>
                  IMDb
                </Label>
              </div>{" "}
              <div className="wiki-btn">
                        <Label color="grey" href={this.props.watchlist.wiki} target="_blank">
                          <Icon name="wikipedia w" />
                          WikiData
                        </Label>
                      </div>
            </div>{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="extra-card-contents">
            <div className="card-btns-container">
              <Button.Group>
                <Modal
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  size="tiny"
                  trigger={
                    <Button
                      animated="vertical"
                      color="teal"
                      onClick={this.handleOpen}
                    >
                      <Button.Content hidden>Review</Button.Content>
                      <Button.Content visible>
                        <Icon name="file text" />
                      </Button.Content>
                    </Button>
                  }
                  closeIcon
                >
                  <Modal.Header>{this.props.watchlist.title}</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="medium"
                      src={this.props.watchlist.url}
                    />
                    <Modal.Description>
                      <Header>My Review</Header>
                      <Form>
                        <TextArea
                          id="reviewText"
                          required
                          onChange={this.handleEditFieldChange}
                          rows="6"
                          placeholder="Write your review here"
                          value={this.state.reviewText}
                        />
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button.Group fluid>
                      <Button
                        animated="vertical"
                        color="grey"
                        onClick={this.handleClose}
                      >
                        <Button.Content hidden>Cancel</Button.Content>
                        <Button.Content visible>
                          <Icon name="cancel" />
                        </Button.Content>
                      </Button>
                      <Button
                        animated="vertical"
                        color="green"
                        open={this.state.open}
                        onCancel={this.close}
                                onClick={() => this.makeEditedReview()}
                      >
                        <Button.Content hidden>Save</Button.Content>
                        <Button.Content visible>
                          <Icon name="save" />
                        </Button.Content>
                      </Button>
                    </Button.Group>
                  </Modal.Actions>
                </Modal>

                <Button animated="vertical" color="red" onClick={this.open}>
                  <Button.Content hidden>Delete</Button.Content>
                  <Button.Content visible>
                    <Icon name="trash alternate outline" />
                  </Button.Content>
                </Button>
              </Button.Group>
              <Confirm
                size="tiny"
                confirmButton="Delete"
                open={this.state.open}
                onCancel={this.close}
                onConfirm={() =>
                  this.refreshAfterDelete(this.props.watchlist.id)
                }
              />
            </div>

            <div className="checkbox-container">
              <Checkbox
                slider
                label="Watched"
                id={this.props.watchlist.id}
                checked={this.props.watchlist.watched === true ? true : false}
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
