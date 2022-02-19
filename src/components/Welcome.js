import React from 'react'
import { useNavigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Container, Col} from 'react-bootstrap'
import '../CSS/Welcome.css'


const Welcome = () => {


    let navigate = useNavigate() 

    const handleClickSI = () => {
        navigate('/Login')
    }

    const handleClickR = () => {
        navigate('/Register')
    }


  return (
    <div>
    {/* <Container>
      <Row className="justify-content-md-center">
      <h1>Welcome</h1> 
      </Row>
      <Row>
        <Col sm="6">
          <Button onClick={handleClickSI} >Sign In</Button>
        </Col>
        <Col sm="6">
          <Button onClick={handleClickR} >Register</Button>
        </Col>
      </Row>
    </Container> */}
      <div >
        <h1 className="header">Welcome</h1> 
      </div>
      <div className="welcome-buttons">
        <Button size="lg" variant="dark" onClick={handleClickSI} >Sign In</Button>{' '}
        <Button size="lg" variant="dark" onClick={handleClickR} >Register</Button>
      </div>
    </div>
  )
}

export default Welcome