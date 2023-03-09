import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem"

const listaDePersonas = (props) => {
    return(
        <div> 
        
        {props.lista.map((persona)=>{
            return<PersonaItem name={persona.name} edad={persona.edad} />;
        })}

         </div>
    )

}
export default listaDePersonas;