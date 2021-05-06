import React from 'react';
import { CardColumns, Card, Jumbotron } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import SavedRecipeModal from './SavedRecipeModal'
import axios from 'axios';

const SERVER = process.env.PORT;
// const SERVER = "http://localhost:3001";

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeTitle: '',
      recipeSummary: '',
      recipeImage: '',
      recipes: [],
      arrayOfRecipes: [],
      showModal: false,
    }
  }

  getMyRecipes = async (e) => {
    e.preventDefault();
    try {
      const recipes = await axios.get(`${SERVER}/user-recipes`, { email: this.props.auth0.user.email });
      this.setState({ recipes: recipes.data });
    } catch (error) {
      console.error(error);
    }
  };

  setRecipes = () => {
    fetch(`${SERVER}/recipes?email=${this.props.auth0.user.email}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            recipes: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  addRecipeTitle = (recipeTitle) => this.setState({ recipeTitle });
  addRecipeSummary = (recipeSummary) => {
    console.log(recipeSummary);
    this.setState({ recipeSummary });
  };

  // const recipes = await axios.get(`${SERVER}/user-recipes`, {email: this.props.auth0.user.email })

  removeARecipe = (arrayOfRecipes) => this.setState({ recipes: arrayOfRecipes });
  updateRecipes = (recipes) => this.setState({ recipes });

  // === === Render Return === === //
  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Recipes</h1>
          <p>This is a collection of my favorite recipes</p>
          {/* <BestBooks recipes={this.state.books} setBooks={this.setBooks} /> */}
        </Jumbotron>

        <CardColumns>
          <>
            <Card onClick={this.handleOpen}
              recipeTitle={this.state.recipeTitle}
              email={this.props.auth0.user.email}
              removeARecipe={this.removeARecipe}
              updateRecipes={this.updateRecipes}
            />
            <SavedRecipeModal
              addRecipeTitle={this.addRecipeTitle}
              addRecipeSummary={this.addRecipeSummary}
              createRecipe={this.createRecipe}
            ></SavedRecipeModal>
          </>
          )
        </CardColumns>
      </>
    )
  }
}



export default withAuth0(MyRecipes);

