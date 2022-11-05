import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import TestStateComponent from "./UseState&ClassState/TestStateComponent";
import Posts from "./Posts/Posts";
import classes from "./Lesson1Router.module.css";
import PostId from "../../components/UI/Post/PostId";

const Lesson1Router = () => {

    return (
        <div className={classes.lesson1}>
            <div className={classes.navbar}>

                <ul className={classes.navbar_list}>
                    <li className={classes.navbar__li}>
                        <strong>
                            <a className={classes.navbar__link && classes.youtube__link} href="https://youtu.be/GNrdg3PzpJQ">Youtube lesson link</a>
                        </strong>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink className={SelectedLink =>  SelectedLink.isActive ? classes.active__link : classes.navbar__link} to={"posts/"}>
                            Posts
                        </NavLink>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink className={SelectedLink =>  SelectedLink.isActive ? classes.active__link : classes.navbar__link} to={"state/"}>
                            UseState&ClassState
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className={classes.lesson1__content}>


                <Routes>
                    <Route path={"/*"} element={<Navigate to={"posts"}/>}/>
                    <Route path={"/posts"} element={<Posts/>}/>
                    <Route path={"/posts/:id"} element={<PostId/>}/>
                    <Route path={"/state/*"} element={<TestStateComponent/>}/>


                </Routes>
            </div>
        </div>
    );
};

export default Lesson1Router;