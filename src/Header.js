import { Navbar } from 'react-bootstrap';
import { Component } from 'react';
import { Container } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> tacoBout </Navbar.Brand>
          <Navbar.Brand href="#login"> Login </Navbar.Brand>
          <Navbar.Brand href="#profile"> My Recipes </Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Header;