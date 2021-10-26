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
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
      <Container>
        <Form className="signin">
          <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" name="email" placeholder="email"></Form.Control>
          </Form.Group>

          <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" name="password" placeholder="password"></Form.Control>
          </Form.Group>

          <button className="signin-button" type="submit">Sign In</button>

        </Form>
      </Container>
      </div>
    )
  }
}

export default SigninForm
