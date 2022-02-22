import React from 'react'
import '../CSS/About.css'
import Matt from '../images/matt.png'
import Veena from '../images/veena.png'
import Quentin from '../images/quentin.png'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <div>
        <h2 className="header">About</h2>
        
        <Card className="about" style={{width: '40rem' , height: '19rem'}}> 
            <Card.Text>
            <p>Welcome to Allergy Busters!</p>
            
            <p>Our app allows you to track your daily habits, environmental factors, and potential irritants in order to help you and your doctor better understand the causes of a particular allergy/intolerance. This can ultimately result in a proper treatment or avoidance plan.</p>
            
            <p> Simply add an entry at the end of each day. Jot down the food you consumed, any exercise you took part in and how you feel. This routine, after establishing consistency, will help you identify patterns - do you generally feel sick on days you consume bread? Do you break out into hives everytime you go for a run in 75 degree weather? Allergy Busters will equip you to get to the bottom of it!</p>
            </Card.Text>
        </Card>

        <div>
            <h3 className="header-team" style={{textDecorationLine: 'underline'}}>The Team</h3>
        </div>

        <div className="ourPhotos">
            <img src={Matt} alt="Matt" height={250} width={250} /> 
            <img src={Veena} alt="Veena" height={250} width={250}/> 
            <img src={Quentin} alt="Quentin" height={250} width={250}/> 
        </div>

    </div>
  )
}

export default About