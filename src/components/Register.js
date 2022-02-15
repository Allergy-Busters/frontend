import { React, useState} from 'react'
import { useNavigate } from 'react-router';



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
    <>
    <div>Register</div>
    <form onSubmit={handleSubmit} method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input>
    
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></input>

        <label for="allergyOrIntolerance">Allergy Or Intolerance:</label>
        <input type="allergyOrIntolerance" id="allergyOrIntolerance" name="allergyOrIntolerance" placeholder="Ex: Celiac, Eczema, Nuts, Lactose" onChange={handleChange}></input>

        <input type="submit" value="Register"/>
        {/* <button type="button" className="reset" onClick={ resetUser }>Reset</button> */}
        <p>{message}</p> 
    </form>
    </>
  )
}

export default Register;
