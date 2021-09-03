import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
      <Navbar.Brand href='#home'>GENUINFLUENCE</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link href='#home'>HOME</Nav.Link>
        <Nav.Link href='#login'>LOGIN</Nav.Link>
        <Nav.Link href='#join'>JOIN</Nav.Link>
        <Nav.Link href='#about'>ABOUT</Nav.Link>
        <Nav.Link href='#talent'>VIEW TALENT</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
