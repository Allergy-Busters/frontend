import React from 'react'
import { useNavigate } from 'react-router'

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
    <button onClick={handleClickSI} >Sign In</button>
    <button onClick={handleClickR} >Register</button>
    
    
    
    </div>
  )
}

export default Welcome