import React, { Component } from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";

class WatchEditForm extends Component {
  render() {
    return (
        <Modal>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
        );
  }
}

export default WatchEditForm;
