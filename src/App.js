import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Ingredients from './Ingredients.js';
import Header from './Header.js';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <h1 id="welcome2">tacoBout</h1>
        <Ingredients />
      </Container>
    );
  }
}

export default withAuth0(App);
