import "./App.css";
import { useState, useEffect } from "react";
import Landing from './components/Landing'
// import NewEntry from './components/NewEntry'
// import EntryDetail from './components/EntryDetail'

function App() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({});

  //SHOW
  let getEntries = async () => {
    let data = await fetch('http://localhost:7200/entries')
    let json = await data.json();
      setEntries(json);
      console.log(json)
  }

  useEffect(() => {
    getEntries();
  }, []);

  let addEntry = (entry) => {
    setEntries([...entries, entry]);
  };


  return (
    <div className="App">
        <h1>Allergy Busters</h1>
        {/* <NewEntry setEntries={setEntries} addEntry={addEntry}/> */}
        <Landing entries={entries} setEntries={setEntries}/>
      {/* <EntryDetail entry={entry}/> */}
    </div>
  );
}

export default App;
