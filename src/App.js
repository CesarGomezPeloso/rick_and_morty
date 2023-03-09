import './App.css';
import ListaPersonas from "../src/components/ListaPersonas/ListaPersonas/ListaPersonas";

const listaPersonas = [
  {name:"Cesar Gomez", edad:38},
  {name:"Nelson Masias", edad:20},
  {name:"Tomas Juntel", edad:40},
  {name:"Jorge Vega", edad:31},
];

function App() {
  
  return(
  
  <div className ="App">  
    <ListaPersonas lista={listaPersonas} />
  </div>
  );  
}

export default App;
