import React from 'react'
import {Container, Row} from 'react-bootstrap';
import ParticularUser from './ParticularUser';

function DisplayUsers(props) {
  return (
    <Container>
        <Row>

        {
            props.userData.map((user) => {
                return <ParticularUser userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser}/> 
            })
        }
        
        </Row>
    </Container>
  )
}
export default DisplayUsers;