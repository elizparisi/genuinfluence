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
        <Form className="signin" onSubmit={this.handleSubmit}>
          <h1 className="signin-header">sign in</h1>
          <br></br>
          <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" name="email" placeholder="email" value={this.state.email}></Form.Control>
          </Form.Group>

          <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" name="password" placeholder="password" value={this.state.password}></Form.Control>
          </Form.Group>
          <br></br>
          <button className="signin-button" type="submit">sign in</button>

        </Form>
      </Container>
      </div>
    )
  }
}

export default SigninForm
