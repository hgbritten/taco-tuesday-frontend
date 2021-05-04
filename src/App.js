import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Ingredients from './Ingredients.js';
import Header from './Header.js';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <Ingredients />
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default App;
