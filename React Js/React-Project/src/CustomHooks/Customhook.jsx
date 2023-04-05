import {useState} from "react";

const Customhook = (intVal,initError) => {
    const [inps, setInps] = useState(intVal);
    const [errors, setErrors] = useState(initError);
    const inputHandleChange = (e) => {
        // e.preventDefault();
        // console.log("called inputHandleChange Hook",e);
        // console.log("called inputHandleChange Hook",e.target.name);
        // console.log("called inputHandleChange Hook",e.target.value);
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"usernameError":"User Name is required"}))
            } else {
                setErrors((errors)=>({...errors,"usernameError":""}))
            }  
        } 
        if (e.target.name == "password") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"passwordError":"Password  is required"}))
            } else {
                setErrors((errors)=>({...errors,"passwordError":""}))
            }  
        } 
        if (e.target.name == "email") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"emailError":"Email is required"}))
            } else {
                setErrors((errors)=>({...errors,"emailError":""}))
            }  
        } 
        if (e.target.name == "mobile") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"mobieError":"MobileNo. is required"}))
            } else {
                setErrors((errors)=>({...errors,"mobileError":""}))
            }  
        } 
        if (e.target.name == "birthday") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"birthdayError":"Birthdate is required"}))
            } else {
                setErrors((errors)=>({...errors,"birthdayError":""}))
            }  
        } 
        
    }
    const checkLogin = (e) => {
        e.preventDefault();
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"usernameError":"User Name is required"}))
            } else {
                setErrors((errors)=>({...errors,"usernameError":""}))
            }  
        } 
        if (e.target.name == "password") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"passwordError":"Password  is required"}))
            } else {
                setErrors((errors)=>({...errors,"passwordError":""}))
            }  
        } 
        if (e.target.name == "email") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"emailError":"Email is required"}))
            } else {
                setErrors((errors)=>({...errors,"emailError":""}))
            }  
        } 
         
        if (e.target.name == "birthday") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"birthdayError":"Birthdate is required"}))
            } else {
                setErrors((errors)=>({...errors,"birthdayError":""}))
            }  
        } 
        if (e.target.name == "mobile") {
            if (e.target.value == "") {
                setErrors((errors)=>({...errors,"mobileError":"Mobile Number is required"}))
            } else {
                setErrors((errors)=>({...errors,"mobileError":""}))
            }  
        } 
        console.log("inp from Hook",inps);
        
    };

   
    return{
        inps,
        errors,
        inputHandleChange,
        checkLogin,
    }
};

export default Customhook;