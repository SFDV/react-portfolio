import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <div class="Form">
        <h1>Contact Me</h1>
        <Form onSubmit={this.handleSubmit} style={{ width: '750px' }}>
          <h2>Contact Me</h2>

          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input type="textarea" name="message" placeholder="Message" rows="5" onChange={this.handleChange} />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>

    );
  }
}

export default Contact;