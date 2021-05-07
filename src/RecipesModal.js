import React from 'react'
import { Modal, Image, Button } from 'react-bootstrap'

class RecipesModal extends React.Component {

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title id="card">{this.props.singleRecipe.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image id="modal-image" src={this.props.singleRecipe.image}></Image>
          <p id="card">{this.props.singleRecipe.summary.replace(/<\/?[^>]+>/gi, '')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={this.props.saveARecipe}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default RecipesModal;
