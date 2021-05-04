import React from 'react';
import { Card, Jumbotron } from 'react-bootstrap';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeTitle: '',
      recipeIngredients: '',
      recipeSteps: '',
      recipeImage: '',
    }
  }


  render() {
    return (
      <>
        <Jumbotron>
          Hello World
      </Jumbotron>
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </>
    )
  }
}

export default MyRecipes;