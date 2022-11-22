import React from "react";
import Login from "../Lesson1/pages/Login/Login";
import Lesson2Router from "../Lesson2/pages/Lesson2Router";
import Lesson1Routes from "../Lesson1/pages/Lesson1Routers";
import Lesson3Router from "../Lesson3/pages/Lesson3Router";
import Lesson4Router from "../Lesson4/pages/Lesson4Router";

export const privateRoutes = [
    {path: "/*", element: ""},
    {path: "/lesson1/*", element: <Lesson1Routes/>},
    {path: "/lesson2/*", element: <Lesson2Router/>},
    {path: "/lesson3/*", element: <Lesson3Router/>},
    {path: "/lesson4/*", element: <Lesson4Router/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];

export const publicRoutes = [
    {path: "/login/*", element: <Login/>},
    {path: "/*", element: <Login/>},
    {path: "*", element: <h1 style={{textAlign: "center",color:"red"}}>Something being wrong</h1>},
];