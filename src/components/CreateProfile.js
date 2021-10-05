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

            <Form.Group>
            <Form.Label>Bio: </Form.Label>
            <Form.Control type="textarea" name="bio"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Location: </Form.Label>
            <Form.Control type="text" name="location"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Age: </Form.Label>
            <Form.Control type="number" name="age"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Category: </Form.Label>
            <Form.Control type="text" name="category"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Social Media: </Form.Label>
            <Form.Control type="text" name="socialmedia"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Followers: </Form.Label>
            <Form.Control type="number" name="followers"></Form.Control>
            </Form.Group>

          </Form>
        </Container>
      </div>
    )
  }
}

export default CreateProfile
