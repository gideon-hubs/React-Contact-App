import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: ""
    }
  }

    handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name] : e.target.value
      })
      
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addUser(this.state)
      this.setState({
        name: "",
        email: "",
        gen: ""
      })
    }


  render() {
    return (
      <>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" name='name' onChange={this.handleChange} value={this.state.name}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"  name='email' onChange={this.handleChange} value={this.state.email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="mobile number" name='gen' onChange={this.handleChange} value={this.state.gen}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </>
    )
  }
}
export default AddUsers;
