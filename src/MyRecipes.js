import React from 'react';
import { CardColumns, Card, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import SavedRecipeModal from './SavedRecipeModal'
import axios from 'axios';

const SERVER = 'https://tacobout.herokuapp.com';
// const SERVER = "http://localhost:3001";

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipeTitle: '',
      recipeSummary: '',
      recipeImage: '',
      showModal: false,
      recipeToShow: null,
    }
  }

  getMyRecipes = async () => {
    try {
      const email = this.props.auth0.user.email;
      const recipes = await axios.get(`${SERVER}/user-recipes?email=${email}`);
      // const recipes = await axios.get(`${SERVER}/user-recipes`, { email: this.props.auth0.user.email });
      console.log(recipes.data);
      console.log({ email: this.props.auth0.user.email });
      console.log(`${SERVER}/user-recipes`);
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

  handleOpen = (recipe) => {
    this.setState({ showModal: true, recipeToShow: recipe });
  }
  handleClose = () => {
    this.setState({ showModal: false })
  }

  // === === Render Return === === //
  render() {
    const { user } = this.props.auth0;
    if (user) {
      console.log(user);
      return (
        <Container fluid>
          <h1 id="favRecipe">My Favorite Recipes</h1>
          <p id="welcomeMessage">Hello, {user.name}!</p>
          <div id="my-recipes-header">
            <Link to="/app" className="btn btn-info" id="my-recipes-button">Back</Link>
            <Button variant="info" onClick={this.getMyRecipes}>See My Recipes</Button>
          </div >
          {
            this.state.recipes.length > 0 &&
            <CardColumns id="allcards">
              {this.state.recipes.map((recipe, index) =>

                <>
                  <Card key={index} onClick={() => this.handleOpen(recipe)}>
                    <Card.Img src={recipe.image} alt="recipe" />
                    <Card.Body>
                      <Card.Title id="card-title">{recipe.title}</Card.Title>
                      {/* <Card.Text>{recipe.summary.replace(/<\/?[^>]+>/gi, '')}</Card.Text> */}
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                  </Card>

                </>

              )}
            </CardColumns>

          }
          {
            this.state.showModal &&
            <SavedRecipeModal
              showModal={this.state.showModal}
              recipeToShow={this.state.recipeToShow}
              onClose={this.handleClose}
            />
          }
        </Container>
      )
    } else {
      return ('');
    }
  }
}



export default withAuth0(MyRecipes);

