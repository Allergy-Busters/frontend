import React from 'react';
import { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import '../CSS/EntryDetails.css'


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
     <div className='body' style={{alignContent:'left'}}>
      <Card className="mb-3" style={{width: '21rem' , height: '25rem'}}>
        <Card.Header>
        <h3>Entry Details</h3>
        </Card.Header>
        <Card.Body className="mb-2">
          <h5><span style={{fontWeight:'bold'}}>Date:</span> {entry.date} </h5>
          <h5><span style={{fontWeight:'bold'}}>Outdoor Temperature:</span> {entry.outdoorTemp}</h5>
          <h5><span style={{fontWeight:'bold'}}>Visit Outside: </span>{entry.visitOutside ? "Did not go outside" : "Visited outside"}</h5>
          <h5><span style={{fontWeight:'bold'}}>Diet: </span>{entry.diet}</h5>
          <h5><span style={{fontWeight:'bold'}}>Did you exercise? </span>{entry.exercise}</h5>
          <h5><span style={{fontWeight:'bold'}}>How are you feeling? </span>{entry.potentialSymptoms}</h5>
          <h5><span style={{fontWeight:'bold'}}>Picture of visible reactions: </span></h5><img src={entry.img} alt="something"></img>
          <h5><span style={{fontWeight:'bold'}}>Where were you when you noticed the reaction? </span>{entry.location}</h5>
        </Card.Body>
      </Card>
      <div className="entryDetail-buttons"> 
        <Button variant="dark"><Link to={`/entries/edit/${id}`} style={{color: 'white'}}>Edit</Link></Button>{' '}
        <Button variant="dark" onClick={deleteEntry}><Link to='/entries' style={{color: 'white'}}>Delete</Link></Button>{' '}
        <Button variant="dark"><Link to='/entries' style={{color: 'white'}}>Return to All Entries</Link></Button>
      </div>
      </div>
    </>
  )
};

export default EntryDetail;
