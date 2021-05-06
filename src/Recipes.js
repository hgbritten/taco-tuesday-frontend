import React from "react"
import { CardColumns, Card } from 'react-bootstrap'
import RecipesModal from './RecipesModal.js'
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
  render() {
    return (
      <>
        <br />
        {this.props.recipeArray.length > 0 &&
          <CardColumns>
            {this.props.recipeArray.map((recipe, index) =>
              <>
                <Card key={index} onClick={() => this.handleOpen(recipe)}>
                  <Card.Img src={recipe.image} alt="recipe" />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
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
          />
        }
      </>
    )
  }
}
export default Recipes;