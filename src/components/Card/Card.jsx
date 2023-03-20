import style from './Card.module.css';

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <div>
            <p>
         <button onClick={()=>onClose(id)} className = {style.closeButton}>x</button>
           </p>
         </div>
         <img src={image} alt="" />         
         <h2>Name: {name}</h2>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <div/>
      </div>
   );
} 