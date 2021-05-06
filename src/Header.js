import { Navbar } from 'react-bootstrap';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
// import MyRecipes from './MyRecipes';

class Header extends Component {
  render() {
    return (
      <Navbar bg="info" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/app"> Build Recipe </Navbar.Brand>
          <Navbar.Brand href="/myrecipes"> My Recipes </Navbar.Brand>
          <LoginButton />
        </Container>
      </Navbar>
    )
  }
}

export default Header;