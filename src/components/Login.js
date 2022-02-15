import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input>

                <input type="submit" value="Login"/>
                {/* <button type="button" className="reset" onClick={ resetUser }>Reset</button> */}
                <p>{message}</p> 
            </form>
            

        </div>
    )
}

export default Login