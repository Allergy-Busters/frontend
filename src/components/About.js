import React from 'react'
import '../CSS/About.css'
import '../peopleImages/matt.png'
import '../peopleImages/veena.png'
import '../peopleImages/quentin.png'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <div>
        <h2 className="header">About</h2>
        
        <Card className="about" style={{width: '40rem' , height: '15rem'}}> 
            <Card.Text>
            Welcome to Allergy Busters! 
            
            Allergy Busters allows you to track your daily habits, environmental factors, and potential irritants in order to help you and your doctor better understand the causes of a particular allergy/intolerance. This can ultimately result in a proper treatment or avoidance plan. 
            
            Simply add an entry at the end of each day, jotting down the food you consumed, any exercise you took part in and how you feel. This routine, after establishing consistency, will help you to catch patterns - do you generally feel sick on days you consume bread? Do you break out into hives everytime you go for a run in 75 degree weather? Allergy Busters will equip you to get to the bottom of it! 
            </Card.Text>
        </Card>

        <div className="ourPhotos">
            <image src='../peopleImages/matt.jpg' alt="Matt" height="300px" width="300px" /> 
            <image src='../peopleImages/veena.jpg' alt="Veena"/> 
            <image src='../peopleImages/quentin.jpg' alt="Quentin"/> 
        </div>

    </div>
  )
}

export default About