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
} from "semantic-ui-react";
import "../profile/Profile.css";
import ContentManager from "../../modules/ContentManager";

class WatchCard extends Component {
  state = {
    reviewText: this.props.watchlist.review,
    loadingStatus: true,
    modalOpen: false
  };

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })


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
      userId: localStorage.getItem("userId")
    };

    this.props.handleUpdate(editedReview, this.props.watchlist.id);
  };

  refreshAfterDelete = (id) => {
    this.props.deleteWatch(id);
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
                <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                  size="tiny"
                  trigger={
                    <Button animated="vertical" color="teal" onClick={this.handleOpen}>
                      <Button.Content hidden>Edit</Button.Content>
                      <Button.Content visible>
                        <Icon name="edit outline" />
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
                        required onChange={this.handleEditFieldChange}
                          rows="6"
                          placeholder="Write your review here"
                          value={this.state.reviewText}
                        />
                      </Form>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions
                  >
                    <Button.Group fluid>
                      <Button animated="vertical" color="grey" onClick={this.handleClose}>
                        <Button.Content hidden>Cancel</Button.Content>
                        <Button.Content visible>
                          <Icon name="cancel" />
                        </Button.Content>
                      </Button>
                      <Button animated="vertical" color="teal" onClick={() => this.makeEditedReview()}>
                        <Button.Content hidden>Save</Button.Content>
                        <Button.Content visible>
                          <Icon name="save" />
                        </Button.Content>
                      </Button>

                    </Button.Group>
                  </Modal.Actions>
                </Modal>

                <Button
                  animated="vertical"
                  color="red"
                  onClick={() =>
                    this.refreshAfterDelete(this.props.watchlist.id)
                  }
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
