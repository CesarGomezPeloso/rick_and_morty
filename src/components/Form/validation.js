const validation = (userData, errors, setErrors) => {
    if (!userData.username) 
    setErrors({...errors, username: "Complete todos los campos"}); 
    else if (userData.username.length > 35)
        setErrors({...errors, username: "Error Mayor a 35 caracteres"});
    else if 
    (
       !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ){
        setErrors({...errors, username: "Email No Valido"});
    }else{
        setErrors({...errors, username: ""});
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        setErrors({...errors, password: "Tiene que tener minimo 6 caracteres y maximo 10"});
    }else if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(userData.password)){
        setErrors({...errors, password: "Debe tener una letra minuscula, Mayusculas, Numeros"});
    }else{
        setErrors({...errors, password: ""});
    }
    
    
    

};



export default validation;