import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'


class SignupForm extends React.Component {

  //set local state
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control type="text" name="username"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" name="email"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" name="password"></Form.Control>
            </Form.Group>

          </Form>
        </Container>
      </div>
    )
  }
}

export default SignupForm
