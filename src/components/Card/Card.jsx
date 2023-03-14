import style from './Card.module.css';

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={onClose} className= {style.closeButton}>x</button>
         <img src={image} alt="" />         
         <h2>Name: {name}</h2>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <div/>
      </div>
   );
} 