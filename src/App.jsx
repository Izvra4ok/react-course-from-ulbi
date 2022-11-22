import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import {AuthContext} from "./Lesson1/context";
import "./styles/App.css";
import Navbar from "./Lesson1/components/NavBar/Navbar";


const App = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoadingApp, setIsLoadingApp] = useState(true);

    useEffect(()=>{
        if (localStorage.getItem("auth")){
            setIsAuth(true)
        }
        setIsLoadingApp(false)
    },[])

    return <BrowserRouter>
        <div className={"App"}>
            <AuthContext.Provider value={{isAuth, setIsAuth,isLoadingApp}}>

                <Navbar/>
                <AppRouter/>

            </AuthContext.Provider>

        </div>
    </BrowserRouter>
};

export default App;