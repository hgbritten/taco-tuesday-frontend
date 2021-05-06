import React from 'react'
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Carousel } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import taco1 from './img/taco1.jpg';
import taco2 from './img/taco2.jpg';
import taco3 from './img/taco3.jpg';
import taco4 from './img/taco4.jpg';
import './App.css';

class Landing extends React.Component {

  render() {
    return (
      <>

        <h1 id="welcome">tacoBout</h1>
        <div id="buttonDiv">
          {!this.props.auth0.isAuthenticated && <LoginButton />}
          {this.props.auth0.isAuthenticated && <LogoutButton />}
        </div>
        <div id="welcomeDiv">
          {this.props.auth0.isAuthenticated && <Link to="/app" className="btn btn-info" id="welcomeButton">Build Recipe</Link>}
        </div>
        <Carousel id="carousel" interval="2000" pause="false" fade="true" >

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={taco1}
              alt="First Slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={taco2}
              alt="Second Slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={taco3}
              alt="Third Slide"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={taco4}
              alt="Fourth Slide"

            />
          </Carousel.Item>
        </Carousel >
      </>
    )
  }

}

export default withAuth0(Landing);
