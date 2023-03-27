import {useState} from "react";
import validation from "./validation";

const Form = () => {
    const [userData, setUserData]= useState ({
        username: "",
        password: "",
    });

    const [errors, setErrors]= useState ({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData ({...userData, [property]: value });
        validation ({...userData, [property]: value }, errors, setErrors);
    };
    
    return(
        <form>
            <div>
                <label htmlForm="username"> Username: </label>
                <input type="text" name="username" 
                value={userData.username} 
                onChange={handleInputChange}
                /> 
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlForm="password"> Password </label>
                <input type="text" name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                /> 
            </div>
            <button> Login </button> 
        </form>
    )
}

export default Form;