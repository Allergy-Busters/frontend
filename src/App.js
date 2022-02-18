import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import Landing from './components/Landing'
import {Link , Routes, Route} from 'react-router-dom'
import NewEntry from './components/NewEntry'
import EntryDetail from './components/EntryDetail'
import EditEntry from "./components/EditEntry";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from './components/Welcome';

function App() {
  const [entries, setEntries] = useState([]);
  const[toast, setToast] = useState('');


 

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

  // let getEntr = (entry) => {
  //   setEntry(entry)
  // }

  let addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  


  return (
    <div className="App">
        <h1 style={{textDecorationLine: 'underline'}}>Allergy Busters</h1>
        {/* <Landing entries={entries} setEntries={setEntries}/> */}
      <main>
          <Routes>
            <Route path="/welcome" element={<Welcome/>}> </Route>
            <Route path="/entries" element={<Landing entries={entries} setEntries={setEntries} toast={toast} setToast={setToast}/>}></Route>
            <Route path="/entries/details/:id" element={<EntryDetail setEntries={setEntries}/>}></Route>
            <Route path="/entries/edit/:id" element={<EditEntry/>}></Route>
            <Route path="/entries/new" element={<NewEntry addEntry={addEntry}/>}></Route>
            <Route path="/register" element={<Register toast={toast} setToast={setToast}/>}></Route>
            <Route path="/login" element={<Login toast={toast} setToast={setToast}/>}></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
