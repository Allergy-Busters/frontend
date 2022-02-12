import React from 'react';
import { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const EntryDetail = ({setEntries}) => {
  
  const [entry, setEntry] = useState({});

  let {id} = useParams()

  useEffect(()=> {
    const showDetails = async() => {
      let  entryResponse = await fetch('http://localhost:7200/entries/details/' + id) 
      let json = await entryResponse.json()
      setEntry(json)
    }
    showDetails()
  }, [id]) 

  const deleteEntry = async(entry) => {
    let data = await fetch('http://localhost:7200/entries/details/' + id, {
      method: "DELETE",
      body: null,
      headers: {
        'Content-Type':'application/json'
      }
    })
    let remainingEntries = await data.json()
    setEntries(remainingEntries)
  }
  
  return (
    <>
      <button><Link to='/entries'>Back</Link></button>
      <div className = "details">
        <h3>Entry Details</h3>
        <h4><span>Date:</span> {entry.date} </h4>
        <h5><span>Outdoor Temperature:</span> {entry.outdoorTemp}</h5>
        <h5><span>Visit Outside: </span>{entry.visitOutside ? "Did not go outside" : "Visited outside"}</h5>
        <h5><span>Diet: </span>{entry.diet}</h5>
        <h5><span>Did you exercise?</span>{entry.exercise}</h5>
        <h5><span>How are you feeling?</span>{entry.potentialSymptoms}</h5>
        <h5><span>Picture of visible reactions:</span></h5><img src={entry.img} alt={entry.img}></img>
        <h5><span>Where were you when you noticed the reaction?</span>{entry.location}</h5>
      </div>  
       <button onClick={deleteEntry}><Link to='/entries'>Delete</Link></button>
      {/* <button><Link to=`/entries/edit/${entry._id}`>Edit</Link></button> */}

    </>
  )
};

export default EntryDetail;
