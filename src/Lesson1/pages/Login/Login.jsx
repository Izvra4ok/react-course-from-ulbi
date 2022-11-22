import React, {useContext} from 'react';
import MyInputText from "../../components/Input/MyInputText";
import MyButton from "../../components/Button/MyButton";
import {AuthContext} from "../../context";

const Login = () => {

    let {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem("auth", true)
    };

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Login Page</h2>
            <form onSubmit={login}>
                <MyInputText style={{maxWidth: "21vw", display: "flex", margin: "10px auto"}} text="text"
                             placeholder="Please enter login"/>
                <MyInputText style={{maxWidth: "21vw", display: "flex", margin: "10px auto"}} text="text"
                             placeholder="Please enter password"/>
                <MyButton style={{display: "flex", margin: "10px auto"}}>Click me</MyButton>
            </form>
        </div>
    );
};

export default Login;