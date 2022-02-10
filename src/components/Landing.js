import React from "react";


const Landing = ({entries, setEntries}) => {

  const displayEntries = entries.map((entry) => {
    return (
      <h3 key={entry._id}> {entry.date} </h3>
    )
  });

  return (
    <div>
        {displayEntries}
    </div>
  )
};

export default Landing;
