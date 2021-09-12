import React from 'react'


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
          </Form>
        </Container>
      </div>
    )
  }
}

export default SignupForm
