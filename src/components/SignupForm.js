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

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Form className="signup-form">
            <h1 className="signup-header">sign up now</h1>
            <br></br>
            <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control type="text" name="username" placeholder="username"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" name="email" placeholder="email"></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" name="password" placeholder="password"></Form.Control>
            </Form.Group>
            <br></br>
            <button className="join-button" type="submit">join now!</button>

          </Form>
        </Container>
      </div>
    )
  }
}

export default SignupForm
