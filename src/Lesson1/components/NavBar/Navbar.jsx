import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../context";


const NavbarApp = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem("auth", "false")
    };

    return (
        <div className={classes.navbar}>
            <ul className={classes.navbar_list}>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson1/"}>Lesson 1-React course</NavLink>
                </li>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson2/"}>Lesson 2-Top 5 React hooks</NavLink>
                </li>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson3/"}>Lesson 3-React & Firebase </NavLink>
                </li>
                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson4/"}>Lesson 4-Websockets React-PAINT ONLINE &
                        Canvas</NavLink>
                </li>
            </ul>

            {isAuth
                ? <MyButton onClick={logout}>Logout</MyButton>
                : null}
        </div>
    );
};

export default NavbarApp;