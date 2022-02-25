import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import{Button} from 'react-bootstrap'
import '../CSS/Login.css'

const Login = ({toast, setToast}) => {
    
    const [user, setUser] = useState({
        username: '',  
        password: '',
        confirmPassword: '',
        allergyOrIntolerance: '',
        valid: null
    });

    const[loggedInUser, setLoggedInUser] = useState(user)
    const[msg, setMessage] = useState('')


    let navigate = useNavigate()


    let handleChange = (e) => {
        setLoggedInUser({...loggedInUser,[e.target.id]:e.target.value})
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200'

        fetch(url + '/sessions/login', {
          method: "POST", 
          mode: "no-cors",
          body: JSON.stringify(loggedInUser),
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type':'application/json'
          }
        })
        .then((response)=> {
          return(
            response.json()
          )
        })
        .then((data)=> {
          console.log(data)
          if (data.status === 200){
            setToast(loggedInUser.username)
            navigate('/entries')
          } else if (data.status === 400){
              setMessage(data.msg)
              console.log(msg)
            } 
          })
         }

        

    
    return (
        <div>
            <h1 className="header">Sign In</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input">
                  <label htmlFor="username" style={{fontWeight:'bold', color:'white'}}>Username:</label>
                  <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input>
                </div>
                <div className="input">
                  <label htmlFor="password" style={{fontWeight:'bold', color:'white'}}>Password:</label>
                  <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input>
                </div>
                <Button className="submit-button" value="submit" type="submit" variant="dark">Submit</Button>
                  {/* <input style={{color:'white', backgroundColor:'blue'}}type="submit" value="Sign In"/> */}
                {/* <button type="button" className="reset" onClick={ resetUser }>Reset</button> */}
                <p style={{fontWeight: 'bold', color:'white'}}>{msg}</p>
            </form>
        </div>
    )
}

export default Login