import React from 'react'
import { useNavigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'

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
    <h2>Welcome</h2>
    <Button varient="secondary">
    <Breadcrumb variant="primary">
      <Breadcrumb.Item onClick={handleClickSI}>Sign In</Breadcrumb.Item>
      <Breadcrumb.Item onClick={handleClickR}>Register</Breadcrumb.Item>
    </Breadcrumb>
    </Button>
    {/* <Button onClick={handleClickSI} >Sign In</Button>
    <span></span>
    <Button onClick={handleClickR} >Register</Button> */}
    
    
    
    </div>
  )
}

export default Welcome