import React from "react";
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router";
// import NewEntry from "./NewEntry";


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
      <Link to={`/entries/details/${entry._id}`} key={entry._id} onClick={entryInFocus}>
      <h3 key={entry._id}> {entry.date}</h3>
      </Link>
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

      <button onClick={logOut}>Log out</button>
        <h2>{toast}'s Log</h2>
        <button><Link to='/entries/new'>Add New Entry</Link></button>
        {displayEntries}
    </div>
  )
};

export default Landing;
