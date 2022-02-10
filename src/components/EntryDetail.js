import React from 'react';

const EntryDetail = ({entry}) => {
  return (
    <>
      <div className = "details">
        <h3>Log Entry</h3>
        <h4><span>Date:</span> {entry.date} </h4>
        <h5><span>Outdoor Temperature:</span> {entry.outdoorTemp}</h5>
        <h5><span>Visit Outside</span>{entry.visitOutside}</h5>
        <h5><span>Diet:</span>{entry.diet}</h5>
        <h5><span>Did you exercise?</span>{entry.exercise}</h5>
        <h5><span>How are you feeling?</span>{entry.potentialSymptoms}</h5>
        <h5><span>Picture of visible reactions:</span></h5><img src={entry.img} alt={entry.img}></img>
        <h5><span>Where were you when you noticed the reaction?</span>{entry.location}</h5>
      </div>
    </>
  )
};

export default EntryDetail;
