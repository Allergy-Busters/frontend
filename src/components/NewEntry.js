import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router'


const NewEntry = ({addEntry}) => {

    const [entry, setEntry] = useState({
        date: '',  
        outdoorTemp: '',
        visitOutside: false,
        diet: '',
        exercise: '',
        potentialSymptoms: '',
        img: '',
        location: ''
      });

      let navigate = useNavigate()

    // const [outsideVisit, setOutsideVisit] = useState('');

    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log(entry)
        console.log("What we are looking for")
        // Adding new entry to our backend
        let response = await fetch('http://localhost:7200/entries', {
            method: "POST", 
            body: JSON.stringify(entry),
            headers: {
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

    let toggleCheckbox = () =>{
        setEntry({...entry, visitOutside:!entry.visitOutside})
    }




  return (
  <form onSubmit={handleSubmit}>
      
            <label>Today's Date: </label>
            <input type="text" id="date" name="date" placeholder="01/01/2022" onChange={handleChange}/>

            <label>Outdoor Temperature: </label>
            <input type="text" id="outdoorTemp" name="outdoorTemp" placeholder="In ℉ or ℃" onChange={handleChange}/>
        
            <label>Visit outside: </label>
            <input type="checkbox" id="visitOutside" name="visitOutside" onChange={toggleCheckbox} checked={!entry.visitOutside} />
       
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
