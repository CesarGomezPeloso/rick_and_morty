import React from "react";

const PersonaItem = (props) => { /*En vez de props se puede llamar cualquier cosa ej juana*/
    return (
    
       <div>
       <hr></hr>
          <p>Nombre: {props.name}</p>
          <p>Edad: {props.edad}</p>
        <hr></hr>
        </div>
        
    )
}

/* class PersonaItem extends React.Component{
    constructor(props){
        super(props);  //super constructor de la clase que hereda      
    }
    render(){
        return (
    
            <div>
            <hr></hr>
               <p>Nombre: {this.props.name}</p>
               <p>Edad: {this.props.edad}</p>
             <hr></hr>
             </div>
         )
    }
} */
 





export default PersonaItem;