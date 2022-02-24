import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router'
import {Form, Card, Button,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/NewEntry.css'
import {Link} from 'react-router-dom'


const NewEntry = ({addEntry}) => {

    const [entry, setEntry] = useState({
        date: '',  
        outdoorTemp: '',
        visitOutside: false,
        diet: '',
        exercise: '',
        potentialSymptoms: '',
        img: null,
        location: ''
      });

    // const [fileData, setFileData]= useState()

    let navigate = useNavigate()

    // const [outsideVisit, setOutsideVisit] = useState('');


    // const data = new FormData()

    // data.append('image', fileData)



    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log(entry)
        // console.log("What we are looking for")
        // Adding new entry to our backend
        //const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com' : 'http://localhost:7200/'
        let response = await fetch('http://localhost:7200/', {
            method: "POST", 
            body: JSON.stringify(entry),
            headers:{
                'Content-Type':'application/json'
            }
        })
        
        // Adding new entry to our frontend 
        let newEntry = await response.json()
        console.log(newEntry)
        addEntry(newEntry)
        navigate('/entries')

    }

    let handleChange = (e) => {
        setEntry({...entry,[e.target.id]:e.target.value})
     }


    let fileChangeHandler = (e) => {
        entry.img = e.target.file
    }

    let toggleCheckbox = () =>{
        setEntry({...entry, visitOutside:!entry.visitOutside})
    }




  return (
    <div className='body body-newEntry' style={{alignContent:'left'}}>
    <Card className="mb-3" style={{width: '21rem' , height: '41rem'}}>
    <Card.Body className="mb-2" style={{width: '20rem'}}> 
     <Form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* <form onSubmit={handleSubmit} encType="multipart/form-data"> */}
        
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label  className="label" htmlFor="todaysDate"> Today's Date:</Form.Label>
            <Form.Control type="text" id="date" name="date" placeholder="Ex: 01/01/2022" onChange={handleChange}></Form.Control>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="outdoorTemp">Outdoor Temperature:</Form.Label>
            <Form.Control type="text" id="outdoorTemp" name="outdoorTemp" placeholder="In ℉ or ℃" onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check className="label" label="Visit Outside" type="checkbox"></Form.Check>
            {/* <Form.Control type="checkbox" id="visitOutside" name="visitOutside" onChange={toggleCheckbox} checked={!entry.visitOutside}></Form.Control> */}
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="diet">Diet: </Form.Label>
            <Form.Control type="text" id="diet" name="diet" placeholder="Ex: eggs, milk, bread" onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="exercise">Exercise: </Form.Label>
            <Form.Control type="text" id="exercise" name="exercise" placeholder="Ex: Went for a run" onChange={handleChange}></Form.Control>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="potentialSymptoms">How are you feeling?: </Form.Label>
            <Form.Control type="text" id="potentialSymptoms" name="potentialSymptoms" placeholder="Ex: My stomach aches" onChange={handleChange}></Form.Control>
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="img">Upload Picture: </Form.Label>
            <Form.Control type="file" id="img" name="img" placeholder="Ex:image of rash" onChange={fileChangeHandler}></Form.Control>
            </Form.Group>  
            
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="label" htmlFor="location">Location: </Form.Label>
            <Form.Control type="text" id="location" name="location" placeholder="Ex:local farm" onChange={handleChange}></Form.Control>
            </Form.Group>  


            
            {/* <label htmlFor="todaysDate">Today's Date: </label>
            <input type="text" id="date" name="date" placeholder="01/01/2022" onChange={handleChange}/>

            <label htmlFor="outdoorTemp">Outdoor Temperature: </label>
            <input type="text" id="outdoorTemp" name="outdoorTemp" placeholder="In ℉ or ℃" onChange={handleChange}/>
        
            <label htmlFor="visitOutside">Visit Outside: </label>
            <input type="checkbox" id="visitOutside" name="visitOutside" onChange={toggleCheckbox} checked={!entry.visitOutside} />
       
            <label htmlFor="diet">Diet: </label>
            <input type="text" id="diet" name="diet" placeholder="Ex: eggs, milk, bread" onChange={handleChange}></input>
        
            <label htmlFor="exercise">Exercise: </label>
            <input type="text" id="exercise" name="exercise" placeholder="Ex: Went for a run" onChange={handleChange}></input>
        
            <label htmlFor="potentialSymptoms">How are you feeling?: </label>
            <input type="text" id="potentialSymptoms" name="potentialSymptoms" placeholder="Ex: My stomach aches" onChange={handleChange}></input>
        
            <label htmlFor="img">Upload Picture: </label>
            <input type="file" id="img" name="img" placeholder="Ex:image of rash" onChange={fileChangeHandler}></input>
        
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location" placeholder="Ex:local farm" onChange={handleChange}></input> */}

    
            <div className="entryNew-buttons">
            <Button size="lg" className="editEntry-button" type ="submit" variant="dark">
              Add New Entry
            </Button>
            <Button size="lg" variant="dark">
            <Link to={'/entries'} style={{textDecoration: 'none', color: 'white'}}>Cancel</Link>
            </Button>
            </div>
              {/* </form> */}
        </Form>
        </Card.Body>
      </Card>
    </div>
          


  )
};

export default NewEntry;
