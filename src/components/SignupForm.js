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
        <p>TESTING</p>
      </div>
    )
  }
}

export default SignupForm
