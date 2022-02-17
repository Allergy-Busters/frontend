import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import{Button} from 'react-bootstrap'
import '../General.css'

const Login = ({toast, setToast}) => {
    
    const [user, setUser] = useState({
        username: '',  
        password: '',
        confirmPassword: '',
        allergyOrIntolerance: '',
        valid: null
    });

    const[loggedInUser, setLoggedInUser] = useState(user)
    const[message, setMessage] = useState('')


    let navigate = useNavigate()


    let handleChange = (e) => {
        setLoggedInUser({...loggedInUser,[e.target.id]:e.target.value})
    }

    let handleSubmit = (e) =>{
        e.preventDefault()

        fetch('http://localhost:7200/session/login', {
          method: "POST", 
          body: JSON.stringify(loggedInUser),
          headers: {
            'Content-Type':'application/json'
          }
     
        })
        .then((res)=> {
          return(
            res.json()
          )
        })
        .then((data)=> {
          console.log(data)
          if (data.status === 200){
            setToast(loggedInUser.username)
            navigate('/entries')
          } else if (data.status === 400){
              setMessage(data.msg)
            } 
          })
         }

        
    
    
    

    
    return (
        <div className="body">
            <h1>Sign In</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input">
                  <label for="username">Username:</label>
                  <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input>
                </div>
                <div className="input">
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input>
                </div>
                  <input style={{color:'white', backgroundColor:'blue'}}type="submit" value="Sign In"/>
                {/* <button type="button" className="reset" onClick={ resetUser }>Reset</button> */}
                <p>{message}</p> 
            </form>
            

        </div>
    )
}

export default Login