import React from 'react'
import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'


const EditEntry = () => {

  const [entry, setEntry] = useState({});

  let {id} = useParams()

  useEffect(()=> {
    const editDetails = async() => {
      let  entryResponse = await fetch('http://localhost:7200/entries/edit/' + id) 
      let json = await entryResponse.json()
      setEntry(json)
    }
    editDetails()
  }, [id]) 

//   let handleChange = (e) => {
//     setOutdoorTemp(e.target.value)
//     setVisitOutside(e.target.value) 
//     setDiet(e.target.value)
//     setExercise(e.target.value)
//     setPotentialSymptoms(e.target.value)
//     setImg(e.target.value)
//     setLocation(e.target.value)
// }

// let handleSubmit = async(e) => {
//     e.preventDefault()
//     // Adding new entry to our backend
//     let response = await fetch('http://localhost:7200/entries/edit/' + id) {
//         method: "PUT", 
//         body: JSON.stringify(
//             {
//             outdoorTemp: outdoorTemp,
//             visitOutside: true,
//             diet: diet,
//             exercise: exercise,
//             potentialSymptoms: potentialSymptoms,
//             img: img,
//             location: location
//         }
//         // ^ Need to check correct syntax for this 
//         ),
//         headers: {
//             'Content-Type':'application/json'
//         }
//         // ^ Do we need to include this?
//     }
// }

  return (
    <form>
      
            <label>Today's Date: </label>
            <input type="text" id="date" name="date">{entry.date}</input>

            <label>Outdoor Temperature: </label>
            <input type="text" id="outdoorTemp" name="outdoorTemp" >{entry.outdoorTemp}</input>
        
            <label>Visit outside: </label>
            <input type="checkbox" id="visitOutside" name="visitOutside"/>
       
            <label htmlFor="diet">Diet: </label>
            <input type="text" id="diet" name="diet" >{entry.diet}</input>
        
            <label htmlFor="exercise">Exercise: </label>
            <input type="text" id="exercise" name="exercise" >{entry.exercise}</input>
        
            <label htmlFor="potentialSymptoms">How are you feeling?: </label>
            <input type="text" id="potentialSymptoms" name="potentialSymptoms" >{entry.potentialSymptoms}</input>
        
            <label htmlFor="img">Upload Picture: </label>
            <input type="text" id="img" name="img">{entry.img}</input>
        
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location">{entry.location}</input>
        
            <input type="submit" value="Enter"/>
      

  </form>
  )
}

export default EditEntry