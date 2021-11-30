import React from 'react'
import {Container, Row, Col, CardGroup, Card} from 'react-bootstrap'

const About = () => {

  return (
  <div className="about">
    <Container>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in nulla. Cum sociis natoque penatibus et magnis. Id ornare arcu odio ut sem nulla pharetra diam. Viverra tellus in hac habitasse platea dictumst vestibulum. Mi sit amet mauris commodo quis. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Dignissim suspendisse in est ante in nibh mauris cursus. Scelerisque viverra mauris in aliquam sem. Ut placerat orci nulla pellentesque dignissim enim sit. Volutpat odio facilisis mauris sit. Massa tempor nec feugiat nisl pretium. Aliquam malesuada bibendum arcu vitae elementum curabitur. Enim ut tellus elementum sagittis vitae et leo. Dui accumsan sit amet nulla. Feugiat in fermentum posuere urna nec.
      <br></br>
      Diam vulputate ut pharetra sit amet aliquam id diam. Massa sapien faucibus et molestie. Justo laoreet sit amet cursus sit amet dictum. Massa vitae tortor condimentum lacinia quis vel eros. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Pharetra et ultrices neque ornare. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Maecenas ultricies mi eget mauris pharetra. Velit dignissim sodales ut eu sem integer vitae justo eget. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Nisl vel pretium lectus quam id leo in. Tempor orci dapibus ultrices in iaculis nunc sed augue. Quam lacus suspendisse faucibus interdum. Sed euismod nisi porta lorem mollis aliquam. Faucibus nisl tincidunt eget nullam non nisi est. Velit scelerisque in dictum non consectetur a erat nam.</p>

      <h2>services</h2>

      <CardGroup>
  <Card className="service-card">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body className="service-one">
      <Card.Title>Showcase Your Work</Card.Title>
      <Card.Text>
        Our platform allows creators like you to showcase your work. Expand your reach and get new clients. Elevate your profile to the next level.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body className="service-two">
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body className="service-three">
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>


    </Container>
  </div>
  )
}

export default About
