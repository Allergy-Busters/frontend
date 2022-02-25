import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams, Link } from 'react-router-dom'
import {useNavigate} from 'react-router'
import '../CSS/EditEntry.css'
import {Form, Card, Button} from 'react-bootstrap'


const EditEntry = () => {

  const [entry, setEntry] = useState({
    date: '',  
    outdoorTemp: '',
    visitOutside: '',
    diet: '',
    exercise: '',
    potentialSymptoms: '',
    img: null,
    location: ''
  });

  let {id} = useParams()
  let navigate = useNavigate()

  useEffect(()=> {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200/entries'
    const editDetails = async() => {
      // 'http://localhost:7200/entries/details/'
      let  entryResponse = await fetch(url + '/details/' + id) 
      let json = await entryResponse.json()
      console.log(json)
      setEntry(json)
    }
    editDetails()
  }, [id]) 


  let handleChange = (e) => {
   setEntry({...entry,[e.target.id]:e.target.value})
}

let fileChangeHandler = (e) => {
  entry.img = e.target.file
}

let handleSubmit = async(e) => {
    const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200/entries'
    e.preventDefault()
    // Sending updated entry to our backend
    // 'http://localhost:7200/entries/edit/'
    let response = await fetch(url + '/edit/' + id, {
        method: "PUT", 
        body: JSON.stringify(entry),
        headers: {
            'Content-Type':'application/json'
        }  
    })
    console.log(response)
    navigate(`/entries/details/${id}`)
  }

  let toggleCheckbox = () =>{
    setEntry({...entry, visitOutside:!entry.visitOutside})
    console.log(entry.visitOutside)
}


  return (
    <>
  

    <div className='body body-newEntry' style={{alignContent:'left'}}>
    <Card className="mb-3" style={{width: '21rem' , height: '41rem'}}>
    <Card.Body className="mb-2" style={{width: '20rem'}}> 
     <Form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* <form onSubmit={handleSubmit} encType="multipart/form-data"> */}
        
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label  className="label" htmlFor="todaysDate"> Today's Date:</Form.Label>
            <Form.Control type="text" id="date" name="date" placeholder={entry.date} onChange={handleChange}></Form.Control>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="outdoorTemp">Outdoor Temperature:</Form.Label>
            <Form.Control type="text" id="outdoorTemp" name="outdoorTemp" placeholder={entry.outdoorTemp} onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check className="label" label="Visit Outside" type="checkbox" checked={!entry.visitOutside}></Form.Check>
            {/* <Form.Control type="checkbox" id="visitOutside" name="visitOutside" onChange={toggleCheckbox} checked={!entry.visitOutside}></Form.Control> */}
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="diet">Diet: </Form.Label>
            <Form.Control type="text" id="diet" name="diet" placeholder={entry.diet} onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="exercise">Exercise: </Form.Label>
            <Form.Control type="text" id="exercise" name="exercise" placeholder={entry.exercise} onChange={handleChange}></Form.Control>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="potentialSymptoms">How are you feeling?: </Form.Label>
            <Form.Control type="text" id="potentialSymptoms" name="potentialSymptoms" placeholder={entry.potentialSymptoms} onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="img">Upload Picture: </Form.Label>
            <Form.Control type="file" id="img" name="img" placeholder={entry.img} onChange={fileChangeHandler}></Form.Control>
            </Form.Group>  
            
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="location">Location: </Form.Label>
            <Form.Control type="text" id="location" name="location" placeholder={entry.location} onChange={handleChange}></Form.Control>
            </Form.Group>  

            <div className="entryEdit-buttons">
            <Button size="lg" className="editEntry-button" type ="submit" variant="dark">
              Save Changes
            </Button>
            <Button size="lg" variant="dark">
            <Link to={`/entries/details/${id}`} style={{textDecoration: 'none', color: 'white'}}>Cancel</Link>
            </Button>
            </div>
            </Form>
        </Card.Body>
      </Card>
      </div>
  </>
  )
}


export default EditEntry;
