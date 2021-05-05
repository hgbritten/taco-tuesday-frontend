import React from "react"
import { CardGroup, Card } from 'react-bootstrap'

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <>
                {this.props.recipeArray.length > 0 && 
                <CardGroup>
                    {this.props.recipeArray.map((recipe, index) => 
                    <Card key={index}>
                        <Card.Img src={recipe.image} alt="recipe"/>
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Text>{recipe.summary}</Card.Text>
                        </Card.Body>

                        <Card.Footer></Card.Footer>
                    </Card>
                    )}
                </CardGroup>
                }   
            </>   
        )
    }

}

export default Recipes;
