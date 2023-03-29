import {Link} from "react-router-dom"; 
import style from "./Card.module.css";
import {connect} from "react-redux";
import {  addFavorite, removeFavorite} from "../../redux/actions"
import { useState } from "react";

function Card({
   id, 
   name, 
   species, 
   gender, 
   image, 
   onClose, 
   addFavorite, 
   removeFavorite,
 }) {

const [isFav, setIsFav] = useState(false);
const handleFavorite = () => {
   if (isFav){
      setIsFav(false);
      removeFavorite(id);
   }else{
      setIsFav(true);
      addFavorite({
         id, 
         name, 
         species, 
         gender, 
         image, 
         onClose, 
         addFavorite, 
         removeFavorite,
       })
   }
};

   return (
      <div className={style.container}>
          {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
         <div>
            <p>
         <button onClick={()=>onClose(id)} className = {style.closeButton}>x</button>
           </p>
         </div>
         <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>         
         <img src={image} alt="" />
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <div/>
      </div>
   );
};


const mapDispatchToPorps = (dispatch)=> {
   return{
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite:(id) => {dispatch(removeFavorite(id))} 

   };
};

export default connect(null, mapDispatchToPorps)(Card);