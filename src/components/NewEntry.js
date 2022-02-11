import React from 'react';
import { useState } from 'react';



const NewEntry = ({addEntry}) => {

    const [outdoorTemp, setOutdoorTemp] = useState('')
    const [visitOutside, setVisitOutside] = useState('false')
    const [diet, setDiet] = useState('')
    const [exercise, setExercise] = useState('')
    const [potentialSymptoms, setPotentialSymptoms] = useState('')
    const [img, setImg] = useState('')
    const [location, setLocation] = useState('')

    let handleSubmit = async(e) => {
        e.preventDefault()
        // Adding new entry to our backend
        let response = await fetch('http://localhost:7200/entries', {
            method: "POST", 
            body: JSON.stringify(
                {
                outdoorTemp: outdoorTemp,
                visitOutside: true,
                diet: diet,
                exercise: exercise,
                potentialSymptoms: potentialSymptoms,
                img: img,
                location: location
            }
            // ^ Need to check correct syntax for this 
            ),
            headers: {
                'Content-Type':'application/json'
            }
            // ^ Do we need to include this?
        })
        
        // Adding new entry to our frontend 
        let entry = await response.json()
        addEntry(entry)

    }

    let handleChange = (e) => {
        setOutdoorTemp(e.target.value)
        setVisitOutside(e.target.value) 
        setDiet(e.target.value)
        setExercise(e.target.value)
        setPotentialSymptoms(e.target.value)
        setImg(e.target.value)
        setLocation(e.target.value)
    }




  return (
  <form onSubmit={handleSubmit}>
      
            <label>Today's Date: </label>
            <input type="text" id="date" name="date" placeholder="01/01/2022" onChange={handleChange}/>

            <label>Outdoor Temperature: </label>
            <input type="text" id="outdoorTemp" name="outdoorTemp" placeholder="In ℉ or ℃" onChange={handleChange}/>
        
            <label>Visit outside: </label>
            <input type="checkbox" id="visitOutside" name="visitOutside"/>
       
            <label htmlFor="diet">Diet: </label>
            <input type="text" id="diet" name="diet" placeholder="Ex: eggs, milk, bread" onChange={handleChange}></input>
        
            <label htmlFor="exercise">Exercise: </label>
            <input type="text" id="exercise" name="exercise" placeholder="Ex: Went for a run" onChange={handleChange}></input>
        
            <label htmlFor="potentialSymptoms">How are you feeling?: </label>
            <input type="text" id="potentialSymptoms" name="potentialSymptoms" placeholder="Ex: My stomach aches" onChange={handleChange}></input>
        
            <label htmlFor="img">Upload Picture: </label>
            <input type="text" id="img" name="img" placeholder="Ex:image of rash" onChange={handleChange}></input>
        
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location" placeholder="Ex:local farm" onChange={handleChange}></input>
        
            <input type="submit" value="Enter"/>
      

  </form>

  )
};

export default NewEntry;
