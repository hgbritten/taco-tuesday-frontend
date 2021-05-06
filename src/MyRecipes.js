import React from 'react';
import { CardColumns, Card, Jumbotron } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import SavedRecipeModal from './SavedRecipeModal'
import axios from 'axios';

// const SERVER = process.env.PORT;
const SERVER = "http://localhost:3001";

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
      const recipes = await axios.get(`${SERVER}/recipes`, {
        params: { email: this.props.auth0.user.email },
      });
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
  createRecipe = async (e) => {
    e.preventDefault();
    const recipes = await axios.post(`${SERVER}/recipes`, {
      title: this.state.recipeTitle,
      summary: this.state.recipeSummary,
      email: this.props.auth0.user.email,
      image: this.state.recipeImage
    });
    this.setState({ showModal: false });
    return recipes;
  };
  removeARecipe = (arrayOfRecipes) => this.setState({ recipes: arrayOfRecipes });
  updateRecipes = (recipes) => this.setState({ recipes });




  // === === Render Return === === //
  render() {
    const { user } = this.props.auth0;
    if (user) {
      console.log(user);
    return (
      <>
        <Jumbotron>
          <h1 id="favRecipe">My Favorite Recipes</h1>
          <p id="welcomeMessage">Hello, {user.name}!</p>
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
              title={this.state.recipeTitle}
              summary={this.state.recipeSummary}
              image={this.state.recipeImage}
              addRecipeTitle={this.addRecipeTitle}
              addRecipeSummary={this.addRecipeSummary}
              createRecipe={this.createRecipe}
            ></SavedRecipeModal>
          </>
          
        </CardColumns>
      </>
    )} else {
      return (
        <>
          <h1>My Favorite Recipes</h1>
          <p>This is a collection of my favorite recipes</p>
          {/* <p>Hello {user.email}</p> */}
        </>
      )
    }
  }
}



export default withAuth0(MyRecipes);

