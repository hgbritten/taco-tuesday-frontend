import { Navbar } from 'react-bootstrap';
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import LoginButton from './LoginButton';
import MyRecipes from './MyRecipes';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Home </Navbar.Brand>
          <LoginButton />
          <Navbar.Brand href="#profile"> My Recipes </Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header;