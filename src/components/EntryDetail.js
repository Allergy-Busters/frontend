import React from 'react';
import { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Card, Button, ListGroup} from 'react-bootstrap'
import '../CSS/EntryDetails.css'


const EntryDetail = ({setEntries}) => {
  
  const [entry, setEntry] = useState({});

  let {id} = useParams()

  useEffect(()=> {
    const showDetails = async() => {
      const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200/entries'
      // 'http://localhost:7200/entries/details/'
      let  entryResponse = await fetch(url +'/details/' + id) 
      let json = await entryResponse.json()
      setEntry(json)
    }
    showDetails()
  }, [id]) 

  const deleteEntry = async(entry) => {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200/entries'
    // 'http://localhost:7200/entries/details/'
    let data = await fetch(url + '/details/' + id, {
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
     <div className='body body-entryDetails' style={{alignContent:'left'}}>
      <Card className="mb-3 " style={{width: '21rem' , height: '38rem'}}>
        <Card.Header>
        <h3>Entry Details</h3>
        </Card.Header>
        <Card.Body className="mb-2">
          <ListGroup variant="flush">
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Date:</span> {entry.date} </h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Outdoor Temperature:</span> {entry.outdoorTemp}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Visit Outside: </span>{entry.visitOutside ? "Did not go outside" : "Visited outside"}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Diet: </span>{entry.diet}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Did you exercise? </span>{entry.exercise}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>How are you feeling? </span>{entry.potentialSymptoms}</h5></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Picture of visible reactions: </span></h5><img src={entry.img} alt="something"></img></ListGroup.Item>
            <ListGroup.Item><h5><span style={{fontWeight:'bold'}}>Where were you when you noticed the reaction? </span>{entry.location}</h5></ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <div className="entryDetail-buttons"> 
        <Button variant="dark"><Link to={`/entries/edit/${id}`} style={{textDecoration: 'none', color: 'white'}}>Edit</Link></Button>{' '}
        <Button variant="dark" onClick={deleteEntry}><Link to='/entries' style={{textDecoration: 'none', color: 'white'}}>Delete</Link></Button>{' '}
        <Button variant="dark"><Link to='/entries' style={{textDecoration: 'none', color: 'white'}}>Return to All Entries</Link></Button>
      </div>
      </div>
    </>
  )
};

export default EntryDetail;
