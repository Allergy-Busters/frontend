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
import About from "./components/About";
import { Nav, Container, Navbar } from 'react-bootstrap';

function App() {
  const [entries, setEntries] = useState([]);
  const[toast, setToast] = useState('');
  const[url, setUrl] = useState();


 

  // Landing
  // let getEntries = async () => {
  //   let data = await fetch('http://localhost:7200/entries')
  //   let json = await data.json();
  //     setEntries(json);
  //     console.log(json)
  // }

  useEffect(() => {
    // getEntries();

  // let deployedUrl='https://allergybusters-backend.herokuapp.com/' 
  //https://allergybusters-backend.herokuapp.com/
  //https://git.heroku.com/allergybusters-backend.git

  const url = process.env.REACT_APP_ENV === 'production' ? 'https://allergybusters-backend.herokuapp.com/' : 'http://localhost:7200/entries'
  setUrl(url)
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      setEntries(data)  
    })
  }, []);

 

  // Entry Details

  // let getEntr = (entry) => {
  //   setEntry(entry)
  // }

  let addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };



  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{opacity: 0.6}}>
        <Container>
          <Navbar.Brand style={{fontFamily: 'serif', fontSize: 40, opacity:1}}>Allergy Busters</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/about" style={{color:"gray"}}>
              <h4>About</h4>
            </Nav.Link>
            <Nav.Link style={{color:"gray"}}>
              <h4>Helpful Resources</h4>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {/* <h1 style={{textDecorationLine: 'underline'}}>Allergy Busters</h1> */}
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
            <Route path="/about" element={<About/>}></Route>
          </Routes>
      </main>
    </div>
  );
}

export default App;
