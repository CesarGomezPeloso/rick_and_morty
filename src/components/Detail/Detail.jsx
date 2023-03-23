import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();


return(
    <div>
        <h2>Nombre</h2>
        <p>Status</p>
        <p>Specie</p>
        <p>Gender</p>
        <p>Origin</p>
        <p>Imagen</p>
    </div>
    );
};

export default Detail;