import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";

function App () {
  // Hooks
  const[characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    !access && navigate("/");
  },[access]);

  //credenciales falsas
  const username = "cesar@mail.com"
  const password = "pass123"

  // Controlador de Eventos
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

  const login = (userData) => {
      if (userData.username === username && userData.password === password){
        setAccess(true);
        navigate("/home");
      }else{
        alert ("Datos ingresados no Validos");
      }
  }

  // Render
  return (
    <div>
        {pathname !== "/" && <Nav onSearch = {onSearch} />}
        <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route
                path='/home'
                element={<Cards characters={characters} onClose={onClose} />}                
              />
              <Route path = "/About" element= {<About />} />
              {<Route path = "/detail/:detailId" element= {<Detail />} />}
        </Routes>
    </div>
  );
}



export default App
