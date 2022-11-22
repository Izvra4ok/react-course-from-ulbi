import React, {useEffect} from 'react';
import classes from "./lesson4.module.scss"
import {Navigate, Route, Routes} from "react-router-dom";
import ToolBar from "../components/ToolBar/ToolBar";
import SettingBar from "../components/SettingBar/SettingBar";
import Canvas from "../components/Canvas/Canvas";


const Lesson4Router = () => {

    useEffect(() => {

    }, [])

    return (
        <div className={classes.lesson4}>
            <Routes>
                <Route path='/:id' element={<><ToolBar/><SettingBar/><Canvas/></>} />
                <Route path='/*' element={<><ToolBar/><SettingBar/><Canvas/><Navigate to={`f${(+new Date()).toString(16)}`}/></>} />
            </Routes>
        </div>
    );
};

export default Lesson4Router;