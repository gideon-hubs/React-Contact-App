import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import DisplayUsers from './components/DisplayUsers';
import AddUsers from './components/AddUsers';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "Gideon",
          email: "og@gmail.com",
          gen: 30,
          id: "ASC1"
        }, 

        {
          name: "Selasie",
          email: "og@gmail.com",
          gen: 30,
          id: "ASC2"
        },

        {
          name: "Chinda",
          email: "og@gmail.com",
          gen: 30,
          id: "ASC3"
        },

        {
          name: "Chinda",
          email: "og@gmail.com",
          gen: 30,
          id: "ASC4"
        },
      ]
    }
  }

  addnewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render() {
    return (
      <>
      <Container fluid>
        <Row>
      <Col md="4">
      <AddUsers addUser = {this.addnewUser}/>
      </Col>

        <Col>
        <DisplayUsers userData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
        </Col>
        </Row>
      </Container>
      </>
    )
  }
}

export default App
