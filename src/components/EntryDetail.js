import React from 'react';
import { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const EntryDetail = () => {
  
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

  return (
    <>
      <button><Link to='/entries'>Back</Link></button>
      <div className = "details">
        <h3>Entry Details</h3>
        <h4><span>Date:</span> {entry.date} </h4>
        <h5><span>Outdoor Temperature:</span> {entry.outdoorTemp}</h5>
        <h5><span>Visit Outside</span>{entry.visitOutside}</h5>
        <h5><span>Diet:</span>{entry.diet}</h5>
        <h5><span>Did you exercise?</span>{entry.exercise}</h5>
        <h5><span>How are you feeling?</span>{entry.potentialSymptoms}</h5>
        <h5><span>Picture of visible reactions:</span></h5><img src={entry.img} alt={entry.img}></img>
        <h5><span>Where were you when you noticed the reaction?</span>{entry.location}</h5>
      </div>
    </>
  )
};

export default EntryDetail;
