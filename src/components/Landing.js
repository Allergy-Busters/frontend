import React from "react";
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router";
// import NewEntry from "./NewEntry";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import '../CSS/Landing.css'
import BackgroundImage from '../images/background.png'


const Landing = ({entries, setEntries, entry, setEntry, toast, setToast}) => {

const entryInFocus = (e) => {

  // entries.map((item) => {
  //   if (item.id === entry.)
  // }

  // )

  // let data = await fetch('http://localhost:7200/entries/' + item._id,{
  //   method: "GET",
    // })
    console.log(e.target)
}

  const displayEntries = entries.map((entry) => {

    return (
      <Card className="mb-3 bg-warning bg-light" style={{width:'15rem'}} border="dark">
        <Card.Body>
          <Card.Header>
          <Link to={`/entries/details/${entry._id}`} key={entry._id} onClick={entryInFocus} style={{color: 'black'}}>
              <h3 key={entry._id}> {entry.date}</h3>
          </Link>
          </Card.Header>  
            <Card.Title style={{fontSize:'2rem'}}>
              {entry.potentialSymptoms}
            </Card.Title>
        </Card.Body>
      </Card>
    )
  });



  let navigate = useNavigate()
//'http://localhost:7200/session/logout'
  const logOut = () => {
const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200'
    fetch(url + '/session/logout', {
      method: "GET",
      body: null,
      headers: {
        'Content-Type':'application/json'
      }
    })

    .then((res) => {
      return (
        res.json() 
      )
    })
    .then((data) => {
      if (data.status === 200 ){
        navigate('/welcome')     
      }
    })



  }



  return (
    <div>
        <div className="buttonAddEntry" >
        <h2 style={{fontSize:'5rem', color:'white', fontFamily: 'Estrangelo Edessa'}}>{toast}'s Log</h2>
        <Button size="lg" variant='dark'> <Link to='/entries/new' style={{ color:'white', textDecoration: 'none' }}>Add New Entry</Link></Button>
        </div>
        <div className="entries">
        {displayEntries}
        </div>
        <div className="logout">
        <Button size="lg" variant="dark" onClick={logOut}>Log out</Button>
        </div>
    </div>
  )
};

export default Landing;
