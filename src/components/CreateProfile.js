import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'

class CreateProfile extends React.Component {

  // set local state
  state = {
    profileimage: '',
    fullname: '',
    bio: '',
    location: '',
    age: '',
    category: '',
    socialmedia: '',
    followers: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      profileimage: '',
      fullname: '',
      bio: '',
      location: '',
      age: '',
      category: '',
      socialmedia: '',
      followers: ''
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Form className="profile-creator" onSubmit={this.handleSubmit}>
            <h1>Create Profile</h1>
            <Form.Group>
            <Form.Label>Profile Image: </Form.Label>
            <Form.Control type="file" placeholder="profileimage" value={this.state.profileimage} />
            </Form.Group>

            <Form.Group>
            <Form.Label>Full Name: </Form.Label>
            <Form.Control type="text" name="fullname" placeholder="fullname" value={this.state.fullname}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Bio: </Form.Label>
            <Form.Control type="textarea" name="bio" placeholder="bio" value={this.state.bio}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Location: </Form.Label>
            <Form.Control type="text" name="location" placeholder="location" value={this.state.location}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Age: </Form.Label>
            <Form.Control type="number" name="age" placeholder="age" value={this.state.age}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Category: </Form.Label>
            <Form.Control type="text" name="category" placeholder="select category" value={this.state.category}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Social Media: </Form.Label>
            <Form.Control type="text" name="socialmedia" placeholder="social media channel" value={this.state.socialmedia}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Followers: </Form.Label>
            <Form.Control type="number" name="followers" placeholder="followers" value={this.state.followers}></Form.Control>
            </Form.Group>

            <br></br>
            <button className="profile-button" type="submit">create profile!</button>

          </Form>
        </Container>
      </div>
    )
  }
}

export default CreateProfile
