import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
      <Navbar.Brand href='#home'>Genuinfluence</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation
