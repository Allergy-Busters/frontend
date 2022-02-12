import React from "react";
import { Link } from 'react-router-dom'
// import NewEntry from "./NewEntry";


const Landing = ({entries, setEntries, entry, setEntry}) => {

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

  return (
    <div>
        <button><Link to='/entries/new'>Add New Entry</Link></button>
        {displayEntries}
    </div>
  )
};

export default Landing;
