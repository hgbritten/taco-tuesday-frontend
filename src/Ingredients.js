import React from 'react';
import { Card, Accordion, Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewRecipe: false,
      brandNewRecipe: '',
      meat: '',
      vegetable: '',
      other: ''
    }
  }

  // addIngredient = () => {
  //   this.setState({ clickedIngredient: true })
  // }

  sendIngredientsList = async (e) => {

    const server = 'http://localhost:3001';
    try {
      e.preventDefault();
      console.log(this.state.meat);
      console.log(this.state.vegetable);
      console.log(this.state.other);
      const newRecipe = await axios.get(`${server}/recipes`, { params: { meat: this.state.meat, vegetable: this.state.vegetable, other: this.state.other } });
      const allNewRecipeArray = newRecipe.data;
      console.log('new recipe array: ', allNewRecipeArray);

      this.setState({ brandNewRecipe: allNewRecipeArray, showNewRecipe: false });
      console.log("New Recipe Created!!!")
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <>
        <Form onSubmit={this.sendIngredientsList}>

          <Accordion defaultActiveKey="1">

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to Choose Protein
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group protein="proteinForm">
                  <Form.Control as="select" onChange={(e) => this.setState({ meat: e.target.value })}>
                    <option>...</option>
                    <option>Chicken</option>
                    <option>Beef</option>
                    <option>Fish</option>
                    <option>Pork</option>
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
                <Form.Group vegetable="vegetableForm">
                  <Form.Control as="select" onChange={(e) => this.setState({ vegetable: e.target.value })}>
                    <option>...</option>
                    <option>Lettuce</option>
                    <option>Onion</option>
                    <option>Tomato</option>
                    <option>Corn</option>
                  </Form.Control>
                </Form.Group>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click to Choose Other Ingredients
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group other="cheeseForm">
                  <Form.Control as="select" onChange={(e) => this.setState({ other: e.target.value })}>
                    <option>...</option>
                    <option>Avocado</option>
                    <option>Cilantro</option>
                    <option>Salsa</option>
                    <option>Lime</option>
                    <option>Tortilla</option>
                    <option>Beans</option>
                    <option>Cheese</option>
                    <option>French Fries</option>
                  </Form.Control>
                </Form.Group>
              </Accordion.Collapse>
            </Card>
          </Accordion >
          <Button variant="dark" type="submit" > Build Recipe </Button>
        </Form >

      </>
    )
  }
}


export default Ingredients;