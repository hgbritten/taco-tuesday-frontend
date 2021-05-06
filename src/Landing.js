import React from 'react'

import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import taco1 from './img/taco1.jpg';
import taco2 from './img/taco2.jpg';
import taco3 from './img/taco3.jpg';
import taco4 from './img/taco4.jpg';
import './App.css';

class Landing extends React.Component {
  render() {
    return (
      <>

        <h1 id="welcome">Welcome to tacoBout!</h1>
        <div id="welcomeDiv">
          <Link to="/app" className="btn btn-primary" id="welcomeButton">Build Recipe Page</Link>
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

export default Landing;
