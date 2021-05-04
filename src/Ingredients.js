import React from 'react';
import { Card, CardColumns, Accordion } from 'react-bootstrap';


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


  render() {
    return (
      <>
        <Accordion defaultActiveKey="1">

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click to Choose Protein
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardColumns>
                <Card
                  onClick={this.addIngredient}>Chicken {this.state.clickedIngredient}</Card>
                <Card>Beef</Card>
                <Card>Pork</Card>
              </CardColumns>
            </Accordion.Collapse>
          </Card>

        </Accordion>

        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click to Choose Veggies
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardColumns>
                <Card>Lettuce</Card>
                <Card>Onion</Card>
                <Card>Tomato</Card>
              </CardColumns>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click to Choose Cheese
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <CardColumns>
                <Card>Cheddar</Card>
                <Card>Cotija</Card>
                <Card>Goat</Card>
              </CardColumns>
            </Accordion.Collapse>
          </Card>
        </Accordion>

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