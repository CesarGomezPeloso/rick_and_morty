import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import { useState } from 'react'
import styled from './App.module.css'

function App () {
  const[characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api";
    const KEY = "77a44721408a.840716731ca74f902c7b";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response => response.json())
    .then((data) =>{
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert ("Algo Salio Mal");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className = {styled.nav} >
        <Nav onSearch = {onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;