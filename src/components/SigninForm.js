import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'

class SigninForm extends React.Component {

  // set local state
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] = event.target.value
    });
  }

  render() {
    return (
      <div>
      <Container>
        <Form>
          <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" name="email"></Form.Control>
          </Form.Group>

          <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" name="password"></Form.Control>
          </Form.Group>

          <Button type="submit">Sign In</Button>

        </Form>
      </Container>
      </div>
    )
  }
}

export default SigninForm
