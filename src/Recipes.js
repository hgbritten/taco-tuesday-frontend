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
                    <Card key={this.props.recipeArray.id}>
                        <Card.Img src={this.props.recipeArray.image} alt="recipe"/>
                        <Card.Body>
                            <Card.Title>{this.props.recipeArray.title}</Card.Title>
                            <Card.Text>{this.props.recipeArray.summary}</Card.Text>
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
