import "./App.css";
import { useState, useEffect } from "react";
import Landing from './components/Landing'
import {Link , Routes, Route} from 'react-router-dom'
// import NewEntry from './components/NewEntry'
import EntryDetail from './components/EntryDetail'

function App() {
  const [entries, setEntries] = useState([]);
 

  // Landing
  let getEntries = async () => {
    let data = await fetch('http://localhost:7200/entries')
    let json = await data.json();
      setEntries(json);
      console.log(json)
  }

  useEffect(() => {
    getEntries();
  }, []);

  // Entry Details

  // let getEntry = (entry) => {
  //   setEntry(entry)
  // }

  let addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App">
        <h1>Allergy Busters</h1>
        {/* <Landing entries={entries} setEntries={setEntries}/> */}
      <main>
          <Routes>
            <Route path="/entries" element={<Landing entries={entries} setEntries={setEntries}/>}></Route>
            <Route path="/entries/details/:id" element={<EntryDetail/>}></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
