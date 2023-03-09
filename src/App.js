import './App.css';
import ListaPersonas from "../src/components/ListaPersonas/ListaPersonas/ListaPersonas";

const listaDePersonas = [
  {name:"Cesar Gomez", edad:38},
  {name:"Nelson Masias", edad:20},
  {name:"Tomas Juntel", edad:40},
  {name:"Jorge Vega", edad:31},
  {name:"Viviana Galvano", edad:23},
];

function App() {
  
  return(
  
  <div className ="App">  
    <ListaPersonas lista={listaDePersonas} />
  </div>
  );  
}

export default App;
