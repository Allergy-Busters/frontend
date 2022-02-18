import { React, useState} from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from '../images/background.png'

import '../General.css'



const Register = ({toast, setToast}) => {
    
    const [user, setUser] = useState({
        username: '',  
        password: '',
        confirmPassword: '',
        allergyOrIntolerance: '',
        valid: null
      });


    const[createUser, setCreateUser] = useState(user)
    const[message, setMessage] = useState('')
   
    let navigate = useNavigate()

    // const resetUser = () => {
    //     setCreateUser({...user})
    //     setMessage('')
    //     console.log(resetUser)
    // }


    let handleSubmit = (e) =>{

      e.preventDefault()
        // if(createUser.password === createUser.confirmPassword){
        //   setCreateUser({...createUser, valid: true})
        //   setToast(`${createUser.username}`)
      fetch('http://localhost:7200/session/register', {
          method: "POST", 
          body: JSON.stringify(createUser),
          headers: {
            'Content-Type':'application/json'
          }
        // })
        // navigate(`/entries`)
        // setMessage()
        // }else{
        //    setCreateUser({...createUser, valid: false})
        //    setMessage('Passwords must match')
        // }
        })
        .then((res)=> {
          return(
            res.json()
          )
        })
        .then((data)=> {
          console.log(data)
          if (data.status === 200){
            setToast(createUser.username)
            navigate('/entries')
          } else if (data.status === 400){
              setMessage(data.msg)
            } 
          })
      }

      let handleChange = (e) => {
        setCreateUser({...createUser,[e.target.id]:e.target.value})
        // if(createUser.password === createUser.confirmPassword){
        //     setMessage('Create an account.')
        // } else {
        //     setMessage('Passwords Must Match')
        // }
     }



  return (
    <div className="outerBody">
    <div class='body-register'>
      <h2 style={{color: 'white', fontStyle: 'italic'}}>Create Account</h2>
      <Form onSubmit={handleSubmit} method="POST">
      {/* <form className='form' onSubmit={handleSubmit} method="POST"> */}
        {/* <div className='input-register'> */}
        {/* <label htmlFor="username">Username:</label> */}
        {/* <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input> */}
        {/* </div> */}

        <Form.Group className="mb-3" controlId="formUsername">
          
          <Form.Label className="label">Username: </Form.Label>
          <Form.Control type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange}></Form.Control>
        
        </Form.Group>  
        
        {/* <div className='input-register'> */}
        {/* <label htmlFor="password">Password:</label> */}
        {/* <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input> */}
         {/* </div> */}

        <Form.Group className="mb-3" controlId="formPassword">
        
          <Form.Label className="label">Password:</Form.Label>
          <Form.Control type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange}></Form.Control>
        
        </Form.Group>
       
        {/* <div className='input-register'> */}
        {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
        {/* <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></input> */}
        {/* </div> */}

        <Form.Group className="mb-3" controlId="formGroupEmail">
         
          <Form.Label className="label">Confirm Password:</Form.Label>
          <Form.Control type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></Form.Control>
         
        </Form.Group>
         
        {/* <div className='input-register'> */}
        {/* <label htmlFor="allergyOrIntolerance">Allergy Or Intolerance:</label> */}
        {/* <input type="allergyOrIntolerance" id="allergyOrIntolerance" name="allergyOrIntolerance" placeholder="Ex: Celiac, Eczema, Nuts, Lactose" onChange={handleChange}></input> */}
        {/* </div> */}

        <Form.Group className="mb-3" controlId="formGroupEmail">
          
          <Form.Label className="label">Allergy Or Intolerance:</Form.Label>
          <Form.Control type="allergyOrIntolerance" id="allergyOrIntolerance" name="allergyOrIntolerance" placeholder="Ex: Celiac, Eczema, Nuts, Lactose" onChange={handleChange}></Form.Control>
        
        </Form.Group>
        {/* </div> */}
       
          {/* <input type="submit" value="Register"/> */} 
          <Button value="Register" type="submit">Register</Button>
          {/* <button type="button" className="reset" onClick={ resetUser }>Reset</button> */}
          <p>{message}</p> 
      {/* </form> */}
      </Form>
    </div>
    </div>
  )
}

export default Register;
