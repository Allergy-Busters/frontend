import React from "react";
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router";
// import NewEntry from "./NewEntry";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import '../General.css'
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
      <Card className="mb-3 bg-warning" style={{width:'12rem'}} border="primary">
        <Card.Body>
          <Card.Title>  
            <Card.Text>
              <Link to={`/entries/details/${entry._id}`} key={entry._id} onClick={entryInFocus}>
              <h3 key={entry._id}> {entry.date}</h3>
              </Link>
            </Card.Text>
          </Card.Title> 
        </Card.Body>
      </Card>
    )
  });



  let navigate = useNavigate()

  const logOut = () => {

    fetch('http://localhost:7200/session/logout', {
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
        <div className="buttonAddEntry" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <h2>{toast}'s Log</h2>
        <Link to='/entries/new' role="button" className="btn btn-outline-dark btn-lg">Add New Entry</Link>
        </div>
        <div className="landingLayout">
        {displayEntries}
        </div>
        <div className="logout">
        <Button onClick={logOut}>Log out</Button>
        </div>
    </div>
  )
};

export default Landing;
