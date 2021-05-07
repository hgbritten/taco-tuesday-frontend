import React from "react"
import { CardColumns, Card } from 'react-bootstrap'
import RecipesModal from './RecipesModal.js'
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';

const SERVER = 'https://tacobout.herokuapp.com'
// const SERVER = "http://localhost:3001"

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      recipe: null,
    }
  }
  handleOpen = (recipe) => {
    this.setState({ showModal: true, recipe });
  }
  handleClose = () => {
    this.setState({ showModal: false })
  }

  saveARecipe = async () => {
    const recipes = await axios.post(`${SERVER}/recipes`, {
      title: this.state.recipe.title,
      summary: this.state.recipe.summary,
      email: this.props.auth0.user.email,
      image: this.state.recipe.image,
    });
    this.setState({ showModal: false });
    return recipes;
  };

  render() {
    return (
      <>
        <br />
        {this.props.recipeArray.length > 0 &&
          <CardColumns id="allcards">
            {this.props.recipeArray.map((recipe, index) =>
              <>
                <Card key={index} onClick={() => this.handleOpen(recipe)}>
                  <Card.Img src={recipe.image} alt="recipe" />
                  <Card.Body>
                    <Card.Title id="card-title" >{recipe.title}</Card.Title>
                    {/* <Card.Text>{recipe.summary}</Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                  </Card.Footer>
                </Card>
              </>
            )}
          </CardColumns>
        }
        {this.state.showModal &&
          <RecipesModal
            showModal={this.state.showModal}
            singleRecipe={this.state.recipe}
            onClose={this.handleClose}
            saveARecipe={this.saveARecipe}
          />
        }
      </>
    )
  }
}
export default withAuth0(Recipes);