import Card from "../Card/Card";
import { CardsContainer } from "./styledComponents";

export default function Cards({characters, onClose}) { //const { characters } = props;
   
   return( 
      <CardsContainer>
         {characters.map(({ id, name, species, gender, image}) => {
            return(
            <Card 
                 key={id}    
                 id= {id}            
                 name = {name}
                 species = {species}
                 gender = {gender}
                 image = {image}
                 onClose= {onClose}            
            />
            );
         })}
      </CardsContainer>
   );
};

