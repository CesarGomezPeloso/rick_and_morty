import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem"




const listaPersonas = (props) => {
    return(
        <div> 
        
        {props.lista.map((persona)=>{
            return<PersonaItem name={persona.name} edad={persona.edad} />
        })}

         </div>
    )

}

export default listaPersonas;