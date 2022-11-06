import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import classes from "./Lesson2Router.module.css";
import UseStateInComponent from "./useHooks/UseStateInComponent";
import Hover from "./useHooks/Hover";
import List from "./useHooks/List";
import Search from "./useHooks/Search";
import Request from "./useHooks/Request";

const Lesson2Router = () => {

    return (
        <div className={classes.lesson1}>
            <div className={classes.navbar}>

                <ul className={classes.navbar_list}>
                    <li className={classes.navbar__li}>
                        <strong>
                            <a className={classes.navbar__link && classes.youtube__link}
                               href="https://youtu.be/ks8oftGP2oc">Youtube lesson link</a>
                        </strong>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink
                            className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
                            to={"useState/"}>
                            useState
                        </NavLink>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink
                            className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
                            to={"useHover/"}>
                            useHover
                        </NavLink>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink
                            className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
                            to={"useScroll/"}>
                            useScroll
                        </NavLink>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink
                            className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
                            to={"useDebounced/"}>
                            useDebounced
                        </NavLink>
                    </li>
                    <li className={classes.navbar__li}>
                        <NavLink
                            className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
                            to={"request/"}>
                            useRequest
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className={classes.lesson1__content}>


                <Routes>
                    <Route path={"/*"} element={<Navigate to={"useState/"}/>}/>

                    <Route path={"/useState/*"} element={<UseStateInComponent/>}/>

                    <Route path={"/useHover/*"} element={<Hover/>}/>

                    <Route path={"/useScroll/*"} element={<List/>}/>

                    <Route path={"/useDebounced/*"} element={<Search/>}/>

                    <Route path={"/request/*"} element={<Request/>}/>


                </Routes>
            </div>
        </div>
    );
};

export default Lesson2Router;