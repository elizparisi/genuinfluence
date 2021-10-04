import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'

class CreateProfile extends React.Component {

  render() {
    return (
      <div>
        <Container>
          <Form>
          <Form.Group>
          <Form.Label>Full Name: </Form.Label>
          <Form.Control type="text" name="fullname"></Form.Control>
          </Form.Group>


          </Form>
        </Container>
      </div>
    )
  }
}

export default CreateProfile
