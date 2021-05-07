import React from 'react';
import { Modal, Image } from 'react-bootstrap';

class SavedRecipeModal extends React.Component {

  // === === Modal === === //
  render() {
    return (
      <Modal id="modal" show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title id="card">{this.props.recipeToShow.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image id="modal-image" src={this.props.recipeToShow.image}></Image>
          <p id="card">{this.props.recipeToShow.summary.replace(/<\/?[^>]+>/gi, '')}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal >
    )
  }
}

export default SavedRecipeModal;