import Lesson1Router from "../Lesson1/pages/Lesson1Router";
import React from "react";
import Login from "../Lesson1/pages/Login/Login";
import Lesson2Router from "../Lesson2/pages/Lesson2Router";
import Lesson3Router from "../Lesson3/pages/Lesson3Router";
import Lesson3Main from "../Lesson3/pages/Lesson3Main";

export const privateRoutes = [
    {path: "/*", element: ""},
    {path: "/lesson1/*", element: <Lesson1Router/>},
    {path: "/lesson2/*", element: <Lesson2Router/>},
    {path: "/lesson3/*", element: <Lesson3Main/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];

export const publicRoutes = [
    {path: "/login/*", element: <Login/>},
    {path: "/*", element: <Login/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];