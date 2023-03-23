import {Link} from "react-router-dom"; 
import style from './Card.module.css';

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
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
} 