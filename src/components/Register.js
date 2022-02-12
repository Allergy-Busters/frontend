import { React, useState} from 'react'


const Register = () => {

    const [user, setUser] = useState({
        username: '',  
        password: '',
        confirmPassword: '',
        allergyOrIntolerance: ''
      });

      let handleSubmit = (e) =>{
          console.log(e.target)
      }

      let handleChange = (e) => {
        setUser({...user,[e.target.id]:e.target.value})
     }



  return (
    <>
    <div>Register</div>
    <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Ex: Jill" onChange={handleChange} ></input>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Ex:123%aBc8" onChange={handleChange} ></input>
    
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" onChange={handleChange}></input>

        <label for="allergyOrIntolerance">Confirm Password:</label>
        <input type="allergyOrIntolerance" id="allergyOrIntolerance" name="allergyOrIntolerance" placeholder="Ex: Celiac, Eczema, Nuts, Lactose" onChange={handleChange}></input>

        <input type="submit" value="Register"/>
</form>
    </>
  )
}

export default Register;