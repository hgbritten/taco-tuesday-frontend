import React from 'react';
import { Card, CardColumns, Accordion, Form, Button } from 'react-bootstrap';


class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedIngredient: false,
      ingredientsArray: []
    }
  }

  addIngredient = () => {
    this.setState({ clickedIngredient: true })
  }

  handleSubmit = (event) => {
    this.props.filterHorns(parseInt(event.target.value));
  }


  render() {
    return (
      <>
        <Form>

          <Accordion defaultActiveKey="1">

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to Choose Protein
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group proteinId="proteinForm.Select">
                  <Form.Control as="select">
                    <option>...</option>
                    <option>Chicken</option>
                    <option>Beef</option>
                    <option>Mutton</option>
                    <option>Fish</option>
                  </Form.Control>
                </Form.Group>
              </Accordion.Collapse>
            </Card>

          </Accordion>

          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to Choose Veggies
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group veggiesId="veggiesForm.Select">
                  <Form.Control as="select" multiple>
                    <option>Lettuce</option>
                    <option>Onion</option>
                    <option>Tomato</option>
                    <option>Cilantro</option>
                  </Form.Control>
                </Form.Group>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to Choose Cheese
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group proteinId="proteinForm.Select">
                  <Form.Control as="select">
                    <option>...</option>
                    <option>Cheddar</option>
                    <option>Mojito or whatever Skyler said</option>
                    <option>Sharp Cheddar</option>
                    <option>Super Sharp Cheddar</option>
                  </Form.Control>
                </Form.Group>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Button variant="dark" onClick={this.handleSubmit}>Build Recipe</Button>
        </Form>

      </>
    )
  }
}

// within CardColumns, name component 'SelectedIngredients'

// ingredient = false;

// if (ingredient === true) {
//   ingredientsArray.push(e.target.value);
// }

export default Ingredients;