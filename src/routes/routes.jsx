import Lesson1Router from "../pages/Lesson1Router/Lesson1Router";
import React from "react";
import Login from "../pages/Login/Login";
import Lesson2Router from "../pages/Lesson2Router/Lesson2Router";

export const privateRoutes = [
    {path: "/*", element: ""},
    {path: "/lesson1/*", element: <Lesson1Router/>},
    {path: "/lesson2/*", element: <Lesson2Router/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];

export const publicRoutes = [
    {path: "/login/*", element: <Login/>},
    {path: "/*", element: <Login/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];