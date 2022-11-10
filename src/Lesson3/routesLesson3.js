import {CHAT_LESSON3_ROUTE, LOGIN_LESSON3_ROUTE} from "./utils/constsLesson3";
import LoginLesson3 from "./components/Login/LoginLesson3";
import ChatLesson3 from "./components/Chat/ChatLesson3";
import React from "react";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path: "/*", element: <Navigate to={"chatLesson3"}/>},
    // {path: "/*", element: ""},
    {path: CHAT_LESSON3_ROUTE, element: <ChatLesson3/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];


export const publicRoutes = [
    {path: "/*", element: <Navigate to={"loginLesson3"}/>},
    // {path: "/*", element: ""},
    {path: LOGIN_LESSON3_ROUTE, element: <LoginLesson3/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];