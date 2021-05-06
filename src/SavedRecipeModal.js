import React from 'react';
import { Modal, Image, Button } from 'react-bootstrap';

class SavedRecipeModal extends React.Component {

  // === === Modal === === //
  handleOpen = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.singleRecipe.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.singleRecipe.image}></Image>
          <p>{this.props.singleRecipe.summary}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">Save Recipe</Button>
        </Modal.Footer>
      </Modal >
    )
  }
}

export default SavedRecipeModal