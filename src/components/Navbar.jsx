import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = props => {
  console.log(props)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href=""></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="./Home">Home</Nav.Link>
          <Nav.Link href="./Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="./Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation