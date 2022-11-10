import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";

const NavbarApp = () => {

    const {setIsAuth} = useContext(AuthContext);

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem("auth","false")
    };

    return (
        <div className={classes.navbar}>
            <ul className={classes.navbar_list}>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson1/"}>Lesson 1</NavLink>
                </li>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson2/"}>Lesson 2</NavLink>
                </li>

                <li className={classes.navbar__li}>
                    <NavLink className={classes.navbar__item} to={"/lesson3/"}>Lesson 3</NavLink>
                </li>
            </ul>
                <MyButton onClick={logout}>Logout</MyButton>
        </div>
    );
};

export default NavbarApp;