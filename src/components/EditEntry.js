import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'


const EditEntry = () => {

  const [entry, setEntry] = useState({
    outdoorTemp: '',
    visitOutside: '',
    diet: '',
    exercise: '',
    potentialSymptoms: '',
    img: '',
    location: ''
  });

  let {id} = useParams()

  useEffect(()=> {
    const editDetails = async() => {
      let  entryResponse = await fetch('http://localhost:7200/entries/details/' + id) 
      let json = await entryResponse.json()
      console.log(json)
      setEntry(json)
    }
    editDetails()
  }, [id]) 


  let handleChange = (e) => {
   setEntry({...entry,[e.target.id]:e.target.value})
}

let handleSubmit = async(e) => {
    e.preventDefault()
    // Sending updated entry to our backend
    let response = await fetch('http://localhost:7200/entries/edit/' + id, {
        method: "PUT", 
        body: JSON.stringify(entry),
        headers: {
            'Content-Type':'application/json'
        }  
    })
    console.log(response)
  }

  return (
    <form onSubmit= {handleSubmit}>
      
            <label>Today's Date: </label>
            <input type="text" id="date" name="date" value={entry.date} onChange={handleChange}></input>

            <label>Outdoor Temperature: </label>
            <input type="text" id="outdoorTemp" name="outdoorTemp" value={entry.outdoorTemp} onChange={handleChange}></input>
        
            <label>Visit outside: </label>
            <input type="checkbox" id="visitOutside" name="visitOutside"/>
       
            <label htmlFor="diet">Diet: </label>
            <input type="text" id="diet" name="diet" value={entry.diet} onChange={handleChange}></input>
        
            <label htmlFor="exercise">Exercise: </label>
            <input type="text" id="exercise" name="exercise" value={entry.exercise} onChange={handleChange} ></input>
        
            <label htmlFor="potentialSymptoms">How are you feeling?: </label>
            <input type="text" id="potentialSymptoms" name="potentialSymptoms" value={entry.potentialSymptoms} onChange={handleChange}></input>
        
            <label htmlFor="img">Upload Picture: </label>
            <input type="text" id="img" name="img" value={entry.img} onChange={handleChange}></input>
        
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location" value={entry.location} onChange={handleChange}></input>
        
            <input type="submit" value="Enter"/>
      
  </form>
  )
}


export default EditEntry;