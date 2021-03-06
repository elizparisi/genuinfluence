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
          <Form className="signup-form" onSubmit={this.handleSubmit}>
            <h1 className="signup-header">sign up now</h1>
            <br></br>
            <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control type="text" name="username" placeholder="username" value={this.state.username}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" name="email" placeholder="email" value={this.state.email}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" name="password" placeholder="password" value={this.state.password}></Form.Control>
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
