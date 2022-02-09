import './App.css';
import {useState} from 'react'

function App() {

  const [entries, setEntries] = useState([])
  const [entry, setEntry] = useState({})


  let getEntry = async(entry) => {
    let data = await fetch('http://localhost:4000/entries')
    let json = await data.json()
    setEntries(json)
  }

  let addEntry = (entry) => {
    setEntries([...entries, entry])
  }


  return (
    <div className="App">
      <header>
        <h1>Allergy Busters</h1>
      </header>
    </div>
  )
}

export default App;
