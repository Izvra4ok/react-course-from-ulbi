import React from 'react';
import {useInput} from "../../hooks/useInput";


const UseStateInComponent = () => {

    const userName = useInput("");

    const userPassword = useInput("");

    return (
        <div>
            <h2>User Name:{userName.value}</h2>
            <h2>User Password:{userPassword.value}</h2>
            <input {...userName} placeholder="User name"/>
            <input {...userPassword} placeholder="User password"/>
            <button onClick={()=> console.log(userName.value,userPassword.value)}>Submit</button>
        </div>
    );
};

export default UseStateInComponent;