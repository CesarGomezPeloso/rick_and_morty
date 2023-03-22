import Cards from './components/Cards/Cards.jsx'
import Nav from   "./components/Nav/Nav.jsx"
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App () {
  const[characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api";
    const KEY = "77a44721408a.840716731ca74f902c7b";

    if (characters.find((char) => char.id === id)){
      return alert ("Personaje Repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
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
    <div>
        <Nav onSearch = {onSearch} />
        <Routes>
            <Route
                path='/home'
                element={<Cards characters={characters} onClose={onClose} />}                
              />
        </Routes>
    </div>
  );
}

export default App;
