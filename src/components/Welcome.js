import React from 'react'
import { useNavigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Breadcrumb} from 'react-bootstrap'
import  '../General.css'


const Welcome = () => {


    let navigate = useNavigate() 

    const handleClickSI = () => {
        navigate('/Login')
    }

    const handleClickR = () => {
        navigate('/Register')
    }


  return (
    <div className='body'>
      <h1>Welcome</h1> 
      <div className='welcome-buttons'>
      <Button onClick={handleClickSI} >Sign In</Button>{' '}
      <Button onClick={handleClickR} >Register</Button>
      </div>
    
    </div>
  )
}

export default Welcome